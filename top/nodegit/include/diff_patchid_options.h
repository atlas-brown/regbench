// This is a generated file, modify: generate/templates/templates/struct_header.h

#ifndef GITDIFFPATCHIDOPTIONS_H
#define GITDIFFPATCHIDOPTIONS_H
#include <nan.h>
#include <string>
#include <queue>
#include <utility>
#include <unordered_map>

#include "async_baton.h"
#include "callback_wrapper.h"
#include "reference_counter.h"
#include "nodegit_wrapper.h"

extern "C" {
  #include <git2.h>
 }

 
using namespace node;
using namespace v8;

class GitDiffPatchidOptions;

struct GitDiffPatchidOptionsTraits {
  typedef GitDiffPatchidOptions cppClass;
  typedef git_diff_patchid_options cType;

  static const bool isDuplicable = false;
  static void duplicate(git_diff_patchid_options **dest, git_diff_patchid_options *src) {
     Nan::ThrowError("duplicate called on GitDiffPatchidOptions which cannot be duplicated");
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_diff_patchid_options *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::free(raw); // :: to avoid calling this free recursively
    }
   }
};
 class GitDiffPatchidOptions : public NodeGitWrapper<GitDiffPatchidOptionsTraits> {
    // grant full access to base class
    friend class NodeGitWrapper<GitDiffPatchidOptionsTraits>;
  public:
    GitDiffPatchidOptions(git_diff_patchid_options* raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>());
    static void InitializeComponent (v8::Local<v8::Object> target);

   
  private:
    GitDiffPatchidOptions();
    ~GitDiffPatchidOptions();

    void ConstructFields();

  
        static NAN_GETTER(GetVersion);
        static NAN_SETTER(SetVersion);

  };

#endif
