// This is a generated file, modify: generate/templates/templates/class_header.h

#ifndef GITNOTE_H
#define GITNOTE_H
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

#include "../include/signature.h"
#include "../include/oid.h"
#include "../include/repository.h"
#include "../include/commit.h"
#include "../include/note_iterator.h"
#include "../include/buf.h"
// Forward declaration.
struct git_note {
};

using namespace node;
using namespace v8;

class GitNote;

struct GitNoteTraits {
  typedef GitNote cppClass;
  typedef git_note cType;

  static const bool isDuplicable = false;
  static void duplicate(git_note **dest, git_note *src) {
     Nan::ThrowError("duplicate called on GitNote which cannot be duplicated");
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_note *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::git_note_free(raw); // :: to avoid calling this free recursively
    }
   }
};

class GitNote : public
  NodeGitWrapper<GitNoteTraits>
{
    // grant full access to base class
    friend class NodeGitWrapper<GitNoteTraits>;
   public:
    static void InitializeComponent (v8::Local<v8::Object> target);

                                                       static int Foreach_note_cb_cppCallback (
      const git_oid * blob_id
      ,
       const git_oid * annotated_object_id
      ,
       void * payload
      );

    static void Foreach_note_cb_async(void *baton);
    static void Foreach_note_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result);
    struct Foreach_NoteCbBaton : public AsyncBatonWithResult<int> {
      const git_oid * blob_id;
      const git_oid * annotated_object_id;
      void * payload;
 
      Foreach_NoteCbBaton(const int &defaultResult)
        : AsyncBatonWithResult<int>(defaultResult) {
        }
    };
                        

  private:
    GitNote()
      : NodeGitWrapper<GitNoteTraits>(
           "A new GitNote cannot be instantiated."
       )
    {}
    GitNote(git_note *raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>())
      : NodeGitWrapper<GitNoteTraits>(raw, selfFreeing, owner)
    {}
    ~GitNote();
                                                                           
    static NAN_METHOD(Author);

    static NAN_METHOD(CommitCreate);

    struct CommitIteratorNewBaton {
      int error_code;
      const git_error* error;
      git_note_iterator * out;
      git_commit * notes_commit;
    };
    class CommitIteratorNewWorker : public Nan::AsyncWorker {
      public:
        CommitIteratorNewWorker(
            CommitIteratorNewBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~CommitIteratorNewWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        CommitIteratorNewBaton *baton;
    };

    static NAN_METHOD(CommitIteratorNew);

    struct CommitReadBaton {
      int error_code;
      const git_error* error;
      git_note * out;
      git_repository * repo;
      git_commit * notes_commit;
      const git_oid * oid;
      bool oidNeedsFree;
    };
    class CommitReadWorker : public Nan::AsyncWorker {
      public:
        CommitReadWorker(
            CommitReadBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~CommitReadWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        CommitReadBaton *baton;
    };

    static NAN_METHOD(CommitRead);

    struct CommitRemoveBaton {
      int error_code;
      const git_error* error;
      git_oid * notes_commit_out;
      git_repository * repo;
      git_commit * notes_commit;
      const git_signature * author;
      const git_signature * committer;
      const git_oid * oid;
      bool oidNeedsFree;
    };
    class CommitRemoveWorker : public Nan::AsyncWorker {
      public:
        CommitRemoveWorker(
            CommitRemoveBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~CommitRemoveWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        CommitRemoveBaton *baton;
    };

    static NAN_METHOD(CommitRemove);

    static NAN_METHOD(Committer);

    struct CreateBaton {
      int error_code;
      const git_error* error;
      git_oid * out;
      git_repository * repo;
      const char * notes_ref;
      const git_signature * author;
      const git_signature * committer;
      const git_oid * oid;
      bool oidNeedsFree;
      const char * note;
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

    struct DefaultRefBaton {
      int error_code;
      const git_error* error;
      git_buf * out;
      git_repository * repo;
    };
    class DefaultRefWorker : public Nan::AsyncWorker {
      public:
        DefaultRefWorker(
            DefaultRefBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~DefaultRefWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        DefaultRefBaton *baton;
    };

    static NAN_METHOD(DefaultRef);

    struct ForeachBaton {
      int error_code;
      const git_error* error;
      git_repository * repo;
      const char * notes_ref;
      git_note_foreach_cb note_cb;
      void * payload;
    };
    class ForeachWorker : public Nan::AsyncWorker {
      public:
        ForeachWorker(
            ForeachBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~ForeachWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        ForeachBaton *baton;
    };

    static NAN_METHOD(Foreach);

    static NAN_METHOD(Id);

    static NAN_METHOD(Message);

    struct ReadBaton {
      int error_code;
      const git_error* error;
      git_note * out;
      git_repository * repo;
      const char * notes_ref;
      const git_oid * oid;
      bool oidNeedsFree;
    };
    class ReadWorker : public Nan::AsyncWorker {
      public:
        ReadWorker(
            ReadBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~ReadWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        ReadBaton *baton;
    };

    static NAN_METHOD(Read);

    struct RemoveBaton {
      int error_code;
      const git_error* error;
      git_repository * repo;
      const char * notes_ref;
      const git_signature * author;
      const git_signature * committer;
      const git_oid * oid;
      bool oidNeedsFree;
    };
    class RemoveWorker : public Nan::AsyncWorker {
      public:
        RemoveWorker(
            RemoveBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~RemoveWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        RemoveBaton *baton;
    };

    static NAN_METHOD(Remove);

    struct Foreach_globalPayload {
      Nan::Callback * note_cb;

      Foreach_globalPayload() {
        note_cb = NULL;
      }

      ~Foreach_globalPayload() {
        if (note_cb != NULL) {
          delete note_cb;
        }
      }
    };
};

#endif
