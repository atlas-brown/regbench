// This is a generated file, modify: generate/templates/templates/class_header.h

#ifndef GITWORKTREEPRUNEOPTIONS_H
#define GITWORKTREEPRUNEOPTIONS_H
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

class GitWorktreePruneOptions;

struct GitWorktreePruneOptionsTraits {
  typedef GitWorktreePruneOptions cppClass;
  typedef git_worktree_prune_options cType;

  static const bool isDuplicable = false;
  static void duplicate(git_worktree_prune_options **dest, git_worktree_prune_options *src) {
     Nan::ThrowError("duplicate called on GitWorktreePruneOptions which cannot be duplicated");
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_worktree_prune_options *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::free(raw); // :: to avoid calling this free recursively
    }
   }
};

class GitWorktreePruneOptions : public
  NodeGitWrapper<GitWorktreePruneOptionsTraits>
{
    // grant full access to base class
    friend class NodeGitWrapper<GitWorktreePruneOptionsTraits>;
   public:
    static void InitializeComponent (v8::Local<v8::Object> target);

 

  private:
    GitWorktreePruneOptions()
      : NodeGitWrapper<GitWorktreePruneOptionsTraits>(
           "A new GitWorktreePruneOptions cannot be instantiated."
       )
    {}
    GitWorktreePruneOptions(git_worktree_prune_options *raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>())
      : NodeGitWrapper<GitWorktreePruneOptionsTraits>(raw, selfFreeing, owner)
    {}
    ~GitWorktreePruneOptions();
     static NAN_METHOD(Version);
    static NAN_METHOD(Flags);
};

#endif
