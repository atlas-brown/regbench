// This is a generated file, modify: generate/templates/templates/struct_header.h

#ifndef GITMERGEFILEOPTIONS_H
#define GITMERGEFILEOPTIONS_H
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

class GitMergeFileOptions;

struct GitMergeFileOptionsTraits {
  typedef GitMergeFileOptions cppClass;
  typedef git_merge_file_options cType;

  static const bool isDuplicable = false;
  static void duplicate(git_merge_file_options **dest, git_merge_file_options *src) {
     Nan::ThrowError("duplicate called on GitMergeFileOptions which cannot be duplicated");
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_merge_file_options *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::free(raw); // :: to avoid calling this free recursively
    }
   }
};
 class GitMergeFileOptions : public NodeGitWrapper<GitMergeFileOptionsTraits> {
    // grant full access to base class
    friend class NodeGitWrapper<GitMergeFileOptionsTraits>;
  public:
    GitMergeFileOptions(git_merge_file_options* raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>());
    static void InitializeComponent (v8::Local<v8::Object> target);

               
  private:
    GitMergeFileOptions();
    ~GitMergeFileOptions();

    void ConstructFields();

  
        static NAN_GETTER(GetVersion);
        static NAN_SETTER(SetVersion);

   
        static NAN_GETTER(GetAncestorLabel);
        static NAN_SETTER(SetAncestorLabel);

   
        static NAN_GETTER(GetOurLabel);
        static NAN_SETTER(SetOurLabel);

   
        static NAN_GETTER(GetTheirLabel);
        static NAN_SETTER(SetTheirLabel);

  
        static NAN_GETTER(GetFavor);
        static NAN_SETTER(SetFavor);

   
        static NAN_GETTER(GetFlags);
        static NAN_SETTER(SetFlags);

   
        static NAN_GETTER(GetMarkerSize);
        static NAN_SETTER(SetMarkerSize);

  };

#endif
