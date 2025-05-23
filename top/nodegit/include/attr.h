// This is a generated file, modify: generate/templates/templates/class_header.h

#ifndef GITATTR_H
#define GITATTR_H
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

#include "../include/repository.h"

using namespace node;
using namespace v8;


class GitAttr : public
  Nan::ObjectWrap
{
   public:
    static void InitializeComponent (v8::Local<v8::Object> target);

                           

  private:
                           
    static NAN_METHOD(AddMacro);

    static NAN_METHOD(CacheFlush);

    struct GetBaton {
      int error_code;
      const git_error* error;
      const char * value_out;
      git_repository * repo;
      uint32_t flags;
      const char * path;
      const char * name;
    };
    class GetWorker : public Nan::AsyncWorker {
      public:
        GetWorker(
            GetBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~GetWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        GetBaton *baton;
    };

    static NAN_METHOD(Get);

    struct GetManyBaton {
      int error_code;
      const git_error* error;
      const char * values_out;
      git_repository * repo;
      uint32_t flags;
      const char * path;
      size_t num_attr;
      const char ** names;
    };
    class GetManyWorker : public Nan::AsyncWorker {
      public:
        GetManyWorker(
            GetManyBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~GetManyWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        GetManyBaton *baton;
    };

    static NAN_METHOD(GetMany);

    static NAN_METHOD(Value);
};

#endif
