// This is a generated file, modify: generate/templates/templates/class_header.h

#ifndef GITTAG_H
#define GITTAG_H
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

#include "../include/str_array_converter.h"
#include "../include/oid.h"
#include "../include/repository.h"
#include "../include/object.h"
#include "../include/signature.h"
#include "../include/strarray.h"
// Forward declaration.
struct git_tag {
};

using namespace node;
using namespace v8;

class GitTag;

struct GitTagTraits {
  typedef GitTag cppClass;
  typedef git_tag cType;

  static const bool isDuplicable = false;
  static void duplicate(git_tag **dest, git_tag *src) {
     Nan::ThrowError("duplicate called on GitTag which cannot be duplicated");
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_tag *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::git_tag_free(raw); // :: to avoid calling this free recursively
    }
   }
};

class GitTag : public
  NodeGitWrapper<GitTagTraits>
{
    // grant full access to base class
    friend class NodeGitWrapper<GitTagTraits>;
   public:
    static void InitializeComponent (v8::Local<v8::Object> target);

                                                                                        

  private:
    GitTag()
      : NodeGitWrapper<GitTagTraits>(
           "A new GitTag cannot be instantiated."
       )
    {}
    GitTag(git_tag *raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>())
      : NodeGitWrapper<GitTagTraits>(raw, selfFreeing, owner)
    {}
    ~GitTag();
                                                                                        
    struct AnnotationCreateBaton {
      int error_code;
      const git_error* error;
      git_oid * oid;
      git_repository * repo;
      const char * tag_name;
      const git_object * target;
      const git_signature * tagger;
      const char * message;
    };
    class AnnotationCreateWorker : public Nan::AsyncWorker {
      public:
        AnnotationCreateWorker(
            AnnotationCreateBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~AnnotationCreateWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        AnnotationCreateBaton *baton;
    };

    static NAN_METHOD(AnnotationCreate);

    struct CreateBaton {
      int error_code;
      const git_error* error;
      git_oid * oid;
      git_repository * repo;
      const char * tag_name;
      const git_object * target;
      const git_signature * tagger;
      const char * message;
      int force;
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

    struct CreateFromBufferBaton {
      int error_code;
      const git_error* error;
      git_oid * oid;
      git_repository * repo;
      const char * buffer;
      int force;
    };
    class CreateFromBufferWorker : public Nan::AsyncWorker {
      public:
        CreateFromBufferWorker(
            CreateFromBufferBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~CreateFromBufferWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        CreateFromBufferBaton *baton;
    };

    static NAN_METHOD(CreateFromBuffer);

    struct CreateLightweightBaton {
      int error_code;
      const git_error* error;
      git_oid * oid;
      git_repository * repo;
      const char * tag_name;
      const git_object * target;
      int force;
    };
    class CreateLightweightWorker : public Nan::AsyncWorker {
      public:
        CreateLightweightWorker(
            CreateLightweightBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~CreateLightweightWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        CreateLightweightBaton *baton;
    };

    static NAN_METHOD(CreateLightweight);

    struct DeleteBaton {
      int error_code;
      const git_error* error;
      git_repository * repo;
      const char * tag_name;
    };
    class DeleteWorker : public Nan::AsyncWorker {
      public:
        DeleteWorker(
            DeleteBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~DeleteWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        DeleteBaton *baton;
    };

    static NAN_METHOD(Delete);

    struct DupBaton {
      int error_code;
      const git_error* error;
      git_tag * out;
      git_tag * source;
    };
    class DupWorker : public Nan::AsyncWorker {
      public:
        DupWorker(
            DupBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~DupWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        DupBaton *baton;
    };

    static NAN_METHOD(Dup);

    static NAN_METHOD(Id);

    struct ListBaton {
      int error_code;
      const git_error* error;
      git_strarray * tag_names;
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

    struct ListMatchBaton {
      int error_code;
      const git_error* error;
      git_strarray * tag_names;
      const char * pattern;
      git_repository * repo;
    };
    class ListMatchWorker : public Nan::AsyncWorker {
      public:
        ListMatchWorker(
            ListMatchBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~ListMatchWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        ListMatchBaton *baton;
    };

    static NAN_METHOD(ListMatch);

    struct LookupBaton {
      int error_code;
      const git_error* error;
      git_tag * out;
      git_repository * repo;
      const git_oid * id;
      bool idNeedsFree;
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

    struct LookupPrefixBaton {
      int error_code;
      const git_error* error;
      git_tag * out;
      git_repository * repo;
      const git_oid * id;
      bool idNeedsFree;
      size_t len;
    };
    class LookupPrefixWorker : public Nan::AsyncWorker {
      public:
        LookupPrefixWorker(
            LookupPrefixBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~LookupPrefixWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        LookupPrefixBaton *baton;
    };

    static NAN_METHOD(LookupPrefix);

    static NAN_METHOD(Message);

    static NAN_METHOD(Name);

    static NAN_METHOD(Owner);

    struct PeelBaton {
      int error_code;
      const git_error* error;
      git_object * tag_target_out;
      const git_tag * tag;
    };
    class PeelWorker : public Nan::AsyncWorker {
      public:
        PeelWorker(
            PeelBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~PeelWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        PeelBaton *baton;
    };

    static NAN_METHOD(Peel);

    static NAN_METHOD(Tagger);

    struct TargetBaton {
      int error_code;
      const git_error* error;
      git_object * target_out;
      const git_tag * tag;
    };
    class TargetWorker : public Nan::AsyncWorker {
      public:
        TargetWorker(
            TargetBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~TargetWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        TargetBaton *baton;
    };

    static NAN_METHOD(Target);

    static NAN_METHOD(TargetId);

    static NAN_METHOD(TargetType);
};

#endif
