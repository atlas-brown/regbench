// This is a generated file, modify: generate/templates/templates/class_header.h

#ifndef GITTREEBUILDER_H
#define GITTREEBUILDER_H
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

#include "../include/tree_entry.h"
#include "../include/oid.h"
#include "../include/repository.h"
#include "../include/tree.h"
// Forward declaration.
struct git_treebuilder {
};

using namespace node;
using namespace v8;

class GitTreebuilder;

struct GitTreebuilderTraits {
  typedef GitTreebuilder cppClass;
  typedef git_treebuilder cType;

  static const bool isDuplicable = false;
  static void duplicate(git_treebuilder **dest, git_treebuilder *src) {
     Nan::ThrowError("duplicate called on GitTreebuilder which cannot be duplicated");
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_treebuilder *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::git_treebuilder_free(raw); // :: to avoid calling this free recursively
    }
   }
};

class GitTreebuilder : public
  NodeGitWrapper<GitTreebuilderTraits>
{
    // grant full access to base class
    friend class NodeGitWrapper<GitTreebuilderTraits>;
   public:
    static void InitializeComponent (v8::Local<v8::Object> target);

                               

  private:
    GitTreebuilder()
      : NodeGitWrapper<GitTreebuilderTraits>(
           "A new GitTreebuilder cannot be instantiated."
       )
    {}
    GitTreebuilder(git_treebuilder *raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>())
      : NodeGitWrapper<GitTreebuilderTraits>(raw, selfFreeing, owner)
    {}
    ~GitTreebuilder();
                               
    static NAN_METHOD(Clear);

    static NAN_METHOD(Entrycount);

    static NAN_METHOD(Get);

    static NAN_METHOD(Insert);

    struct CreateBaton {
      int error_code;
      const git_error* error;
      git_treebuilder * out;
      git_repository * repo;
      const git_tree * source;
    };
    class CreateWorker : public Nan::AsyncWorker {
      public:
        CreateWorker(
            CreateBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~CreateWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        CreateBaton *baton;
    };

    static NAN_METHOD(Create);

    static NAN_METHOD(Remove);

    struct WriteBaton {
      int error_code;
      const git_error* error;
      git_oid * id;
      git_treebuilder * bld;
    };
    class WriteWorker : public Nan::AsyncWorker {
      public:
        WriteWorker(
            WriteBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~WriteWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        WriteBaton *baton;
    };

    static NAN_METHOD(Write);
};

#endif
