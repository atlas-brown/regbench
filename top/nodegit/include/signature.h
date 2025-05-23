// This is a generated file, modify: generate/templates/templates/class_header.h

#ifndef GITSIGNATURE_H
#define GITSIGNATURE_H
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

#include "../include/time.h"
#include "../include/repository.h"

using namespace node;
using namespace v8;

class GitSignature;

struct GitSignatureTraits {
  typedef GitSignature cppClass;
  typedef git_signature cType;

  static const bool isDuplicable = true;
  static void duplicate(git_signature **dest, git_signature *src) {
    git_signature_dup(dest, src);
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_signature *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::git_signature_free(raw); // :: to avoid calling this free recursively
    }
   }
};

class GitSignature : public
  NodeGitWrapper<GitSignatureTraits>
{
    // grant full access to base class
    friend class NodeGitWrapper<GitSignatureTraits>;
   public:
    static void InitializeComponent (v8::Local<v8::Object> target);

                     

  private:
    GitSignature()
      : NodeGitWrapper<GitSignatureTraits>(
           "A new GitSignature cannot be instantiated."
       )
    {}
    GitSignature(git_signature *raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>())
      : NodeGitWrapper<GitSignatureTraits>(raw, selfFreeing, owner)
    {}
    ~GitSignature();
                         static NAN_METHOD(Name);
    static NAN_METHOD(Email);
    static NAN_METHOD(When);

    struct DefaultBaton {
      int error_code;
      const git_error* error;
      git_signature * out;
      git_repository * repo;
    };
    class DefaultWorker : public Nan::AsyncWorker {
      public:
        DefaultWorker(
            DefaultBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~DefaultWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        DefaultBaton *baton;
    };

    static NAN_METHOD(Default);

    struct FromBufferBaton {
      int error_code;
      const git_error* error;
      git_signature * out;
      const char * buf;
    };
    class FromBufferWorker : public Nan::AsyncWorker {
      public:
        FromBufferWorker(
            FromBufferBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~FromBufferWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        FromBufferBaton *baton;
    };

    static NAN_METHOD(FromBuffer);

    static NAN_METHOD(Create);

    static NAN_METHOD(Now);
};

#endif
