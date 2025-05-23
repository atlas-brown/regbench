// This is a generated file, modify: generate/templates/templates/class_header.h

#ifndef GITWORKTREEADDOPTIONS_H
#define GITWORKTREEADDOPTIONS_H
#include <nan.h>
#include <string>
#include <queue>
#include <utility>
#include <unordered_map>
#include <sstream>

#include "async_baton.h"
#include "nodegit_wrapper.h"
#include "promise_completion.h"
#include "reference_counter.h"

extern "C" {
#include <git2.h>
}

#include "../include/typedefs.h"


using namespace node;
using namespace v8;

class GitWorktreeAddOptions;

struct GitWorktreeAddOptionsTraits {
  typedef GitWorktreeAddOptions cppClass;
  typedef git_worktree_add_options cType;

  static const bool isDuplicable = false;
  static void duplicate(git_worktree_add_options **dest, git_worktree_add_options *src) {
     Nan::ThrowError("duplicate called on GitWorktreeAddOptions which cannot be duplicated");
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_worktree_add_options *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::free(raw); // :: to avoid calling this free recursively
    }
   }
};

class GitWorktreeAddOptions : public
  NodeGitWrapper<GitWorktreeAddOptionsTraits>
{
    // grant full access to base class
    friend class NodeGitWrapper<GitWorktreeAddOptionsTraits>;
   public:
    static void InitializeComponent (v8::Local<v8::Object> target);

 

  private:
    GitWorktreeAddOptions()
      : NodeGitWrapper<GitWorktreeAddOptionsTraits>(
           "A new GitWorktreeAddOptions cannot be instantiated."
       )
    {}
    GitWorktreeAddOptions(git_worktree_add_options *raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>())
      : NodeGitWrapper<GitWorktreeAddOptionsTraits>(raw, selfFreeing, owner)
    {}
    ~GitWorktreeAddOptions();
     static NAN_METHOD(Version);
    static NAN_METHOD(Lock);
};

#endif
