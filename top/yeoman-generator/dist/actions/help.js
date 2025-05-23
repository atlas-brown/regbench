import path from 'node:path';
import fs from 'node:fs';
import table from 'text-table';
function formatArg(config) {
    let arg = `<${config.name}>`;
    if (!config.required) {
        arg = `[${arg}]`;
    }
    return arg;
}
export class HelpMixin {
    /**
     * Tries to get the description from a USAGE file one folder above the
     * source root otherwise uses a default description
     *
     * @return Help message of the generator
     */
    help() {
        const filepath = path.resolve(this.sourceRoot(), '../USAGE');
        const exists = fs.existsSync(filepath);
        let out = ['Usage:', `  ${this.usage()}`, ''];
        // Build options
        if (Object.keys(this._options).length > 0) {
            out = [...out, 'Options:', this.optionsHelp(), ''];
        }
        // Build arguments
        if (this._arguments.length > 0) {
            out = [...out, 'Arguments:', this.argumentsHelp(), ''];
        }
        // Append USAGE file is any
        if (exists) {
            out.push(fs.readFileSync(filepath, 'utf8'));
        }
        return out.join('\n');
    }
    /**
     * Output usage information for this given generator, depending on its arguments
     * or options
     *
     * @return Usage information of the generator
     */
    usage() {
        const options = Object.keys(this._options).length > 0 ? '[options]' : '';
        let name = this._namespace;
        let args = '';
        if (this._arguments.length > 0) {
            args = `${this._arguments.map(arg => formatArg(arg)).join(' ')} `;
        }
        name = name.replace(/^yeoman:/, '');
        let out = `yo ${name} ${args}${options}`;
        if (this.description) {
            out += `\n\n${this.description}`;
        }
        return out;
    }
    /**
     * Simple setter for custom `description` to append on help output.
     *
     * @param description
     */
    desc(description) {
        this.description = description || '';
        return this;
    }
    /**
     * Get help text for arguments
     * @returns Text of options in formatted table
     */
    argumentsHelp() {
        const rows = this._arguments.map(config => {
            return [
                '',
                config.name ?? '',
                config.description ? `# ${config.description}` : '',
                config.type ? `Type: ${config.type.name}` : '',
                `Required: ${config.required}`,
            ];
        });
        return table(rows);
    }
    /**
     * Get help text for options
     * @returns Text of options in formatted table
     */
    optionsHelp() {
        const rows = Object.values(this._options)
            .filter((opt) => !opt.hide)
            .map((opt) => {
            return [
                '',
                opt.alias ? `-${opt.alias}, ` : '',
                `--${opt.name}`,
                opt.description ? `# ${opt.description}` : '',
                opt.default !== undefined && opt.default !== '' ? `Default: ${opt.default}` : '',
            ];
        });
        return table(rows);
    }
}
