import path from 'path';
import { stringify } from 'querystring';
import { STATIC_METADATA_IMAGES } from '../../../../lib/metadata/is-metadata-route';
import { WEBPACK_RESOURCE_QUERIES } from '../../../../lib/constants';
const METADATA_TYPE = 'metadata';
const NUMERIC_SUFFIX_ARRAY = Array(10).fill(0);
// Produce all compositions with filename (icon, apple-icon, etc.) with extensions (png, jpg, etc.)
async function enumMetadataFiles(dir, filename, extensions, { metadataResolver, // When set to true, possible filename without extension could: icon, icon0, ..., icon9
numericSuffix }) {
    const collectedFiles = [];
    // Collect <filename>.<ext>, <filename>[].<ext>
    const possibleFileNames = [
        filename
    ].concat(numericSuffix ? NUMERIC_SUFFIX_ARRAY.map((_, index)=>filename + index) : []);
    for (const name of possibleFileNames){
        const resolved = await metadataResolver(dir, name, extensions);
        if (resolved) {
            collectedFiles.push(resolved);
        }
    }
    return collectedFiles;
}
export async function createStaticMetadataFromRoute(resolvedDir, { segment, metadataResolver, isRootLayoutOrRootPage, pageExtensions, basePath }) {
    let hasStaticMetadataFiles = false;
    const staticImagesMetadata = {
        icon: [],
        apple: [],
        twitter: [],
        openGraph: [],
        manifest: undefined
    };
    async function collectIconModuleIfExists(type) {
        if (type === 'manifest') {
            const staticManifestExtension = [
                'webmanifest',
                'json'
            ];
            const manifestFile = await enumMetadataFiles(resolvedDir, 'manifest', staticManifestExtension.concat(pageExtensions), {
                metadataResolver,
                numericSuffix: false
            });
            if (manifestFile.length > 0) {
                hasStaticMetadataFiles = true;
                const { name, ext } = path.parse(manifestFile[0]);
                const extension = staticManifestExtension.includes(ext.slice(1)) ? ext.slice(1) : 'webmanifest';
                staticImagesMetadata.manifest = JSON.stringify(`${basePath}/${name}.${extension}`);
            }
            return;
        }
        const isFavicon = type === 'favicon';
        const resolvedMetadataFiles = await enumMetadataFiles(resolvedDir, STATIC_METADATA_IMAGES[type].filename, [
            ...STATIC_METADATA_IMAGES[type].extensions,
            ...isFavicon ? [] : pageExtensions
        ], {
            metadataResolver,
            numericSuffix: !isFavicon
        });
        resolvedMetadataFiles.sort((a, b)=>a.localeCompare(b)).forEach((filepath)=>{
            const imageModuleImportSource = `next-metadata-image-loader?${stringify({
                type,
                segment,
                basePath,
                pageExtensions
            })}!${filepath}?${WEBPACK_RESOURCE_QUERIES.metadata}`;
            const imageModule = `(async (props) => (await import(/* webpackMode: "eager" */ ${JSON.stringify(imageModuleImportSource)})).default(props))`;
            hasStaticMetadataFiles = true;
            if (type === 'favicon') {
                staticImagesMetadata.icon.unshift(imageModule);
            } else {
                staticImagesMetadata[type].push(imageModule);
            }
        });
    }
    // Intentionally make these serial to reuse directory access cache.
    await collectIconModuleIfExists('icon');
    await collectIconModuleIfExists('apple');
    await collectIconModuleIfExists('openGraph');
    await collectIconModuleIfExists('twitter');
    if (isRootLayoutOrRootPage) {
        await collectIconModuleIfExists('favicon');
        await collectIconModuleIfExists('manifest');
    }
    return hasStaticMetadataFiles ? staticImagesMetadata : null;
}
export function createMetadataExportsCode(metadata) {
    return metadata ? `${METADATA_TYPE}: {
    icon: [${metadata.icon.join(',')}],
    apple: [${metadata.apple.join(',')}],
    openGraph: [${metadata.openGraph.join(',')}],
    twitter: [${metadata.twitter.join(',')}],
    manifest: ${metadata.manifest ? metadata.manifest : 'undefined'}
  }` : '';
}

//# sourceMappingURL=discover.js.map