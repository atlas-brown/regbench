// This is a generated file, modify: generate/templates/templates/class_header.h

#ifndef GITCOMMIT_H
#define GITCOMMIT_H
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

#include "../include/oid.h"
#include "../include/signature.h"
#include "../include/tree.h"
#include "../include/mailmap.h"
#include "../include/repository.h"
#include "../include/buf.h"
// Forward declaration.
struct git_commit {
};

using namespace node;
using namespace v8;

class GitCommit;

struct GitCommitTraits {
  typedef GitCommit cppClass;
  typedef git_commit cType;

  static const bool isDuplicable = false;
  static void duplicate(git_commit **dest, git_commit *src) {
     Nan::ThrowError("duplicate called on GitCommit which cannot be duplicated");
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_commit *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::git_commit_free(raw); // :: to avoid calling this free recursively
    }
   }
};

class GitCommit : public
  NodeGitWrapper<GitCommitTraits>
{
    // grant full access to base class
    friend class NodeGitWrapper<GitCommitTraits>;
   public:
    static void InitializeComponent (v8::Local<v8::Object> target);

                                                                                                                                                     

  private:
    GitCommit()
      : NodeGitWrapper<GitCommitTraits>(
           "A new GitCommit cannot be instantiated."
       )
    {}
    GitCommit(git_commit *raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>())
      : NodeGitWrapper<GitCommitTraits>(raw, selfFreeing, owner)
    {}
    ~GitCommit();
                                                                                                                                                     
    struct AmendBaton {
      int error_code;
      const git_error* error;
      git_oid * id;
      const git_commit * commit_to_amend;
      const char * update_ref;
      const git_signature * author;
      const git_signature * committer;
      const char * message_encoding;
      const char * message;
      const git_tree * tree;
    };
    class AmendWorker : public Nan::AsyncWorker {
      public:
        AmendWorker(
            AmendBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~AmendWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        AmendBaton *baton;
    };

    static NAN_METHOD(Amend);

    static NAN_METHOD(Author);

    struct AuthorWithMailmapBaton {
      int error_code;
      const git_error* error;
      git_signature * out;
      const git_commit * commit;
      const git_mailmap * mailmap;
    };
    class AuthorWithMailmapWorker : public Nan::AsyncWorker {
      public:
        AuthorWithMailmapWorker(
            AuthorWithMailmapBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~AuthorWithMailmapWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        AuthorWithMailmapBaton *baton;
    };

    static NAN_METHOD(AuthorWithMailmap);

    static NAN_METHOD(Body);

    static NAN_METHOD(Committer);

    struct CommitterWithMailmapBaton {
      int error_code;
      const git_error* error;
      git_signature * out;
      const git_commit * commit;
      const git_mailmap * mailmap;
    };
    class CommitterWithMailmapWorker : public Nan::AsyncWorker {
      public:
        CommitterWithMailmapWorker(
            CommitterWithMailmapBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~CommitterWithMailmapWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        CommitterWithMailmapBaton *baton;
    };

    static NAN_METHOD(CommitterWithMailmap);

    struct CreateBaton {
      int error_code;
      const git_error* error;
      git_oid * id;
      git_repository * repo;
      const char * update_ref;
      const git_signature * author;
      const git_signature * committer;
      const char * message_encoding;
      const char * message;
      const git_tree * tree;
      size_t parent_count;
      const git_commit ** parents;
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

    struct CreateBufferBaton {
      int error_code;
      const git_error* error;
      git_buf * out;
      git_repository * repo;
      const git_signature * author;
      const git_signature * committer;
      const char * message_encoding;
      const char * message;
      const git_tree * tree;
      size_t parent_count;
      const git_commit ** parents;
    };
    class CreateBufferWorker : public Nan::AsyncWorker {
      public:
        CreateBufferWorker(
            CreateBufferBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~CreateBufferWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        CreateBufferBaton *baton;
    };

    static NAN_METHOD(CreateBuffer);

    static NAN_METHOD(CreateV);

    struct CreateWithSignatureBaton {
      int error_code;
      const git_error* error;
      git_oid * out;
      git_repository * repo;
      const char * commit_content;
      const char * signature;
      const char * signature_field;
    };
    class CreateWithSignatureWorker : public Nan::AsyncWorker {
      public:
        CreateWithSignatureWorker(
            CreateWithSignatureBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~CreateWithSignatureWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        CreateWithSignatureBaton *baton;
    };

    static NAN_METHOD(CreateWithSignature);

    struct DupBaton {
      int error_code;
      const git_error* error;
      git_commit * out;
      git_commit * source;
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

    struct ExtractSignatureBaton {
      int error_code;
      const git_error* error;
      git_buf signature;
      git_buf signed_data;
      git_repository * repo;
      git_oid * commit_id;
      bool commit_idNeedsFree;
      char * field;
    };
    class ExtractSignatureWorker : public Nan::AsyncWorker {
      public:
        ExtractSignatureWorker(
            ExtractSignatureBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~ExtractSignatureWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        ExtractSignatureBaton *baton;
    };

    static NAN_METHOD(ExtractSignature);

    struct HeaderFieldBaton {
      int error_code;
      const git_error* error;
      git_buf * out;
      const git_commit * commit;
      const char * field;
    };
    class HeaderFieldWorker : public Nan::AsyncWorker {
      public:
        HeaderFieldWorker(
            HeaderFieldBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~HeaderFieldWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        HeaderFieldBaton *baton;
    };

    static NAN_METHOD(HeaderField);

    static NAN_METHOD(Id);

    struct LookupBaton {
      int error_code;
      const git_error* error;
      git_commit * commit;
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
      git_commit * commit;
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

    static NAN_METHOD(MessageEncoding);

    static NAN_METHOD(MessageRaw);

    struct NthGenAncestorBaton {
      int error_code;
      const git_error* error;
      git_commit * ancestor;
      const git_commit * commit;
      unsigned int n;
    };
    class NthGenAncestorWorker : public Nan::AsyncWorker {
      public:
        NthGenAncestorWorker(
            NthGenAncestorBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~NthGenAncestorWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        NthGenAncestorBaton *baton;
    };

    static NAN_METHOD(NthGenAncestor);

    static NAN_METHOD(Owner);

    struct ParentBaton {
      int error_code;
      const git_error* error;
      git_commit * out;
      const git_commit * commit;
      unsigned int n;
    };
    class ParentWorker : public Nan::AsyncWorker {
      public:
        ParentWorker(
            ParentBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~ParentWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        ParentBaton *baton;
    };

    static NAN_METHOD(Parent);

    static NAN_METHOD(ParentId);

    static NAN_METHOD(Parentcount);

    static NAN_METHOD(RawHeader);

    static NAN_METHOD(Summary);

    static NAN_METHOD(Time);

    static NAN_METHOD(TimeOffset);

    static NAN_METHOD(Tree);

    static NAN_METHOD(TreeId);
};

#endif
