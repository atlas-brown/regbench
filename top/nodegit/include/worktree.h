// This is a generated file, modify: generate/templates/templates/class_header.h

#ifndef GITWORKTREE_H
#define GITWORKTREE_H
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

#include "../include/git_buf_converter.h"
#include "../include/repository.h"
#include "../include/worktree_add_options.h"
#include "../include/buf.h"
#include "../include/worktree_prune_options.h"
#include "../include/strarray.h"
// Forward declaration.
struct git_worktree {
};

using namespace node;
using namespace v8;

class GitWorktree;

struct GitWorktreeTraits {
  typedef GitWorktree cppClass;
  typedef git_worktree cType;

  static const bool isDuplicable = false;
  static void duplicate(git_worktree **dest, git_worktree *src) {
     Nan::ThrowError("duplicate called on GitWorktree which cannot be duplicated");
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_worktree *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::git_worktree_free(raw); // :: to avoid calling this free recursively
    }
   }
};

class GitWorktree : public
  NodeGitWrapper<GitWorktreeTraits>
{
    // grant full access to base class
    friend class NodeGitWrapper<GitWorktreeTraits>;
   public:
    static void InitializeComponent (v8::Local<v8::Object> target);

                                                 

  private:
    GitWorktree()
      : NodeGitWrapper<GitWorktreeTraits>(
           "A new GitWorktree cannot be instantiated."
       )
    {}
    GitWorktree(git_worktree *raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>())
      : NodeGitWrapper<GitWorktreeTraits>(raw, selfFreeing, owner)
    {}
    ~GitWorktree();
                                                 
    struct AddBaton {
      int error_code;
      const git_error* error;
      git_worktree * out;
      git_repository * repo;
      const char * name;
      const char * path;
      const git_worktree_add_options * opts;
    };
    class AddWorker : public Nan::AsyncWorker {
      public:
        AddWorker(
            AddBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~AddWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        AddBaton *baton;
    };

    static NAN_METHOD(Add);

    static NAN_METHOD(IsLocked);

    static NAN_METHOD(IsPrunable);

    struct ListBaton {
      int error_code;
      const git_error* error;
      git_strarray * out;
      git_repository * repo;
    };
    class ListWorker : public Nan::AsyncWorker {
      public:
        ListWorker(
            ListBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~ListWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        ListBaton *baton;
    };

    static NAN_METHOD(List);

    static NAN_METHOD(Lock);

    struct LookupBaton {
      int error_code;
      const git_error* error;
      git_worktree * out;
      git_repository * repo;
      const char * name;
    };
    class LookupWorker : public Nan::AsyncWorker {
      public:
        LookupWorker(
            LookupBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~LookupWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        LookupBaton *baton;
    };

    static NAN_METHOD(Lookup);

    static NAN_METHOD(Name);

    struct OpenFromRepositoryBaton {
      int error_code;
      const git_error* error;
      git_worktree * out;
      git_repository * repo;
    };
    class OpenFromRepositoryWorker : public Nan::AsyncWorker {
      public:
        OpenFromRepositoryWorker(
            OpenFromRepositoryBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~OpenFromRepositoryWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        OpenFromRepositoryBaton *baton;
    };

    static NAN_METHOD(OpenFromRepository);

    static NAN_METHOD(Path);

    static NAN_METHOD(Prune);

    static NAN_METHOD(Unlock);

    static NAN_METHOD(Validate);
};

#endif
