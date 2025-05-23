# This is a generated file, modify: generate/templates/templates/binding.gyp

{
  "variables": {
    "is_electron%": "<!(node ./utils/isBuildingForElectron.js <(node_root_dir))",
    "is_IBMi%": "<!(node -p \"os.platform() == 'aix' && os.type() == 'OS400' ? 1 : 0\")"
  },

  "targets": [{
    "target_name": "acquireOpenSSL",
    "conditions": [
      ["<(is_electron) == 1 and OS != 'linux'", {
        "actions": [{
          "action_name": "acquire",
          "action": ["node", "utils/acquireOpenSSL.js"],
          "inputs": ["vendor/static_config/openssl_distributions.json"],
          "outputs": ["vendor/openssl"],
          "message": "Acquiring OpensSL binaries and headers"
        }]
      }]
    ]
  }, {
    "target_name": "configureLibssh2",
    "actions": [{
      "action_name": "configure",
      "action": ["node", "utils/configureLibssh2.js"],
      "inputs": [""],
      "outputs": [""]
    }],
    "hard_dependencies": [
      "acquireOpenSSL"
    ]
  }, {
    "target_name": "nodegit",

    "hard_dependencies": [
      "configureLibssh2"
    ],

    "dependencies": [
      "vendor/libgit2.gyp:libgit2"
    ],

    "variables": {
      "coverage%": 0
    },
    "sources": [
      "src/async_baton.cc",
      "src/lock_master.cc",
      "src/reference_counter.cc",
      "src/nodegit.cc",
      "src/init_ssh2.cc",
      "src/promise_completion.cc",
      "src/wrapper.cc",
      "src/functions/copy.cc",
      "src/functions/free.cc",
      "src/convenient_patch.cc",
      "src/convenient_hunk.cc",
      "src/filter_registry.cc",
      "src/git_buf_converter.cc",
      "src/str_array_converter.cc",
      "src/thread_pool.cc",
      "src/annotated_commit.cc",
      "src/apply.cc",
      "src/apply_options.cc",
      "src/apply_options.cc",
      "src/attr.cc",
      "src/blame.cc",
      "src/blame_hunk.cc",
      "src/blame_options.cc",
      "src/blob.cc",
      "src/blob_filter_options.cc",
      "src/blob_filter_options.cc",
      "src/branch.cc",
      "src/branch_iterator.cc",
      "src/buf.cc",
      "src/cert.cc",
      "src/cert_hostkey.cc",
      "src/cert_x509.cc",
      "src/checkout.cc",
      "src/checkout_options.cc",
      "src/checkout_perfdata.cc",
      "src/cherrypick.cc",
      "src/cherrypick_options.cc",
      "src/clone.cc",
      "src/clone_options.cc",
      "src/commit.cc",
      "src/config.cc",
      "src/config_entry.cc",
      "src/config_entry.cc",
      "src/config_iterator.cc",
      "src/configmap.cc",
      "src/cred.cc",
      "src/describe_format_options.cc",
      "src/describe_format_options.cc",
      "src/describe_options.cc",
      "src/describe_options.cc",
      "src/describe_result.cc",
      "src/diff.cc",
      "src/diff_binary.cc",
      "src/diff_binary_file.cc",
      "src/diff_delta.cc",
      "src/diff_file.cc",
      "src/diff_find_options.cc",
      "src/diff_hunk.cc",
      "src/diff_line.cc",
      "src/diff_options.cc",
      "src/diff_patchid_options.cc",
      "src/diff_perfdata.cc",
      "src/diff_stats.cc",
      "src/error.cc",
      "src/fetch.cc",
      "src/fetch_options.cc",
      "src/fetch_options.cc",
      "src/filter.cc",
      "src/filter.cc",
      "src/filter_list.cc",
      "src/filter_source.cc",
      "src/graph.cc",
      "src/hashsig.cc",
      "src/ignore.cc",
      "src/index.cc",
      "src/index_conflict_iterator.cc",
      "src/index_entry.cc",
      "src/index_iterator.cc",
      "src/index_name_entry.cc",
      "src/index_reuc_entry.cc",
      "src/index_time.cc",
      "src/indexer_progress.cc",
      "src/libgit2.cc",
      "src/mailmap.cc",
      "src/merge.cc",
      "src/merge_file_input.cc",
      "src/merge_file_options.cc",
      "src/merge_options.cc",
      "src/note.cc",
      "src/note_iterator.cc",
      "src/object.cc",
      "src/odb.cc",
      "src/odb_object.cc",
      "src/oid.cc",
      "src/oid_shorten.cc",
      "src/oidarray.cc",
      "src/packbuilder.cc",
      "src/patch.cc",
      "src/path.cc",
      "src/pathspec.cc",
      "src/pathspec_match_list.cc",
      "src/proxy.cc",
      "src/proxy_options.cc",
      "src/push_options.cc",
      "src/push_update.cc",
      "src/rebase.cc",
      "src/rebase_operation.cc",
      "src/rebase_options.cc",
      "src/rebase_options.cc",
      "src/refdb.cc",
      "src/reference.cc",
      "src/reflog.cc",
      "src/reflog_entry.cc",
      "src/refspec.cc",
      "src/remote.cc",
      "src/remote_callbacks.cc",
      "src/remote_callbacks.cc",
      "src/remote_create_options.cc",
      "src/remote_create_options.cc",
      "src/remote_head.cc",
      "src/remote_head.cc",
      "src/repository.cc",
      "src/repository_init_options.cc",
      "src/reset.cc",
      "src/revert.cc",
      "src/revert_options.cc",
      "src/revparse.cc",
      "src/revwalk.cc",
      "src/signature.cc",
      "src/stash.cc",
      "src/stash_apply_options.cc",
      "src/stash_apply_options.cc",
      "src/status.cc",
      "src/status_entry.cc",
      "src/status_list.cc",
      "src/status_options.cc",
      "src/status_options.cc",
      "src/strarray.cc",
      "src/submodule.cc",
      "src/submodule_update_options.cc",
      "src/tag.cc",
      "src/time.cc",
      "src/trace.cc",
      "src/transaction.cc",
      "src/transport.cc",
      "src/tree.cc",
      "src/tree_entry.cc",
      "src/tree_update.cc",
      "src/treebuilder.cc",
      "src/worktree.cc",
      "src/worktree_add_options.cc",
      "src/worktree_add_options.cc",
      "src/worktree_prune_options.cc",
      "src/worktree_prune_options.cc",
      "src/writestream.cc",
    ],

    "include_dirs": [
      "vendor/libv8-convert",
      "vendor/libssh2/include",
      "<!(node -e \"require('nan')\")"
    ],

    "cflags": [
      "-Wall"
    ],

    "conditions": [
      [
        "coverage==1", {
          "cflags": [
            "-ftest-coverage",
            "-fprofile-arcs"
          ],
          "link_settings": {
            "libraries": [
              "-lgcov"
            ]
          },
        }
      ],
      [
        "OS=='mac'", {
          "libraries": [
            "-liconv",
          ],
          "conditions": [
            ["<(is_electron) == 1", {
              "include_dirs": [
                "vendor/openssl/include"
              ],
              "libraries": [
                "<(module_root_dir)/vendor/openssl/lib/libcrypto.a",
                "<(module_root_dir)/vendor/openssl/lib/libssl.a"
              ]
            }]
          ],
          "xcode_settings": {
            "GCC_ENABLE_CPP_EXCEPTIONS": "YES",
            "MACOSX_DEPLOYMENT_TARGET": "10.9",
            'CLANG_CXX_LIBRARY': 'libc++',
            'CLANG_CXX_LANGUAGE_STANDARD': 'c++11',

            "WARNING_CFLAGS": [
              "-Wno-unused-variable",
              "-Wint-conversions",
              "-Wmissing-field-initializers",
              "-Wno-c++11-extensions"
            ]
          }
        }
      ],
      [
        "OS=='win'", {
          "conditions": [
            ["<(is_electron) == 1", {
              "include_dirs": ["vendor/openssl/include"],
              "libraries": [
                "<(module_root_dir)/vendor/openssl/lib/libcrypto.lib",
                "<(module_root_dir)/vendor/openssl/lib/libssl.lib"
              ]
            }]
          ],
          "defines": [
            "_HAS_EXCEPTIONS=1"
          ],
          "msvs_settings": {
            "VCCLCompilerTool": {
              "AdditionalOptions": [
                "/EHsc"
              ]
            },
            "VCLinkerTool": {
              "AdditionalOptions": [
                "/FORCE:MULTIPLE"
              ]
            }
          },
          "libraries": [
            "winhttp.lib",
            "crypt32.lib",
            "rpcrt4.lib"
          ]
        }
      ],
      ["OS=='mac' or OS=='linux' or OS.endswith('bsd') or <(is_IBMi) == 1", {
        "libraries": [
          "<!(krb5-config gssapi --libs)"
        ]
      }],
      [
        "OS=='linux' or OS.endswith('bsd') or <(is_IBMi) == 1", {
          "cflags": [
            "-std=c++11"
          ]
        }
      ],
      [
        "OS.endswith('bsd') or (<(is_electron) == 1 and OS=='linux') or <(is_IBMi) == 1", {
          "libraries": [
            "-lcrypto",
            "-lssl"
          ],
        }
      ],
      [
        "<(is_IBMi) == 1", {
          "include_dirs": [
            "/QOpenSys/pkgs/include"
          ],
          "libraries": [
            "-L/QOpenSys/pkgs/lib"
          ]
        }
      ]
    ]
  }]
}