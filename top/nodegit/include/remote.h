// This is a generated file, modify: generate/templates/templates/class_header.h

#ifndef GITREMOTE_H
#define GITREMOTE_H
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
#include "../include/remote_head.h"
#include "../include/repository.h"
#include "../include/remote_callbacks.h"
#include "../include/proxy_options.h"
#include "../include/strarray.h"
#include "../include/remote_create_options.h"
#include "../include/buf.h"
#include "../include/fetch_options.h"
#include "../include/refspec.h"
#include "../include/push_options.h"
#include "../include/indexer_progress.h"
// Forward declaration.
struct git_remote {
};

using namespace node;
using namespace v8;

class GitRemote;

struct GitRemoteTraits {
  typedef GitRemote cppClass;
  typedef git_remote cType;

  static const bool isDuplicable = false;
  static void duplicate(git_remote **dest, git_remote *src) {
     Nan::ThrowError("duplicate called on GitRemote which cannot be duplicated");
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_remote *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::git_remote_free(raw); // :: to avoid calling this free recursively
    }
   }
};

class GitRemote : public
  NodeGitWrapper<GitRemoteTraits>
{
    // grant full access to base class
    friend class NodeGitWrapper<GitRemoteTraits>;
   public:
    static void InitializeComponent (v8::Local<v8::Object> target);

                                                                                                                                                                           

  private:
    GitRemote()
      : NodeGitWrapper<GitRemoteTraits>(
           "A new GitRemote cannot be instantiated."
       )
    {}
    GitRemote(git_remote *raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>())
      : NodeGitWrapper<GitRemoteTraits>(raw, selfFreeing, owner)
    {}
    ~GitRemote();
                                                                                                                                                                           
    static NAN_METHOD(AddFetch);

    static NAN_METHOD(AddPush);

    static NAN_METHOD(Autotag);

    struct ConnectBaton {
      int error_code;
      const git_error* error;
      git_remote * remote;
      git_direction direction;
      const git_remote_callbacks * callbacks;
      const git_proxy_options * proxy_opts;
      const git_strarray * custom_headers;
    };
    class ConnectWorker : public Nan::AsyncWorker {
      public:
        ConnectWorker(
            ConnectBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~ConnectWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        ConnectBaton *baton;
    };

    static NAN_METHOD(Connect);

    static NAN_METHOD(Connected);

    struct CreateBaton {
      int error_code;
      const git_error* error;
      git_remote * out;
      git_repository * repo;
      const char * name;
      const char * url;
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

    struct CreateAnonymousBaton {
      int error_code;
      const git_error* error;
      git_remote * out;
      git_repository * repo;
      const char * url;
    };
    class CreateAnonymousWorker : public Nan::AsyncWorker {
      public:
        CreateAnonymousWorker(
            CreateAnonymousBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~CreateAnonymousWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        CreateAnonymousBaton *baton;
    };

    static NAN_METHOD(CreateAnonymous);

    struct CreateDetachedBaton {
      int error_code;
      const git_error* error;
      git_remote * out;
      const char * url;
    };
    class CreateDetachedWorker : public Nan::AsyncWorker {
      public:
        CreateDetachedWorker(
            CreateDetachedBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~CreateDetachedWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        CreateDetachedBaton *baton;
    };

    static NAN_METHOD(CreateDetached);

    struct CreateWithFetchspecBaton {
      int error_code;
      const git_error* error;
      git_remote * out;
      git_repository * repo;
      const char * name;
      const char * url;
      const char * fetch;
    };
    class CreateWithFetchspecWorker : public Nan::AsyncWorker {
      public:
        CreateWithFetchspecWorker(
            CreateWithFetchspecBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~CreateWithFetchspecWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        CreateWithFetchspecBaton *baton;
    };

    static NAN_METHOD(CreateWithFetchspec);

    struct CreateWithOptsBaton {
      int error_code;
      const git_error* error;
      git_remote * out;
      const char * url;
      const git_remote_create_options * opts;
    };
    class CreateWithOptsWorker : public Nan::AsyncWorker {
      public:
        CreateWithOptsWorker(
            CreateWithOptsBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~CreateWithOptsWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        CreateWithOptsBaton *baton;
    };

    static NAN_METHOD(CreateWithOpts);

    struct DefaultBranchBaton {
      int error_code;
      const git_error* error;
      git_buf * out;
      git_remote * remote;
    };
    class DefaultBranchWorker : public Nan::AsyncWorker {
      public:
        DefaultBranchWorker(
            DefaultBranchBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~DefaultBranchWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        DefaultBranchBaton *baton;
    };

    static NAN_METHOD(DefaultBranch);

    struct DeleteBaton {
      int error_code;
      const git_error* error;
      git_repository * repo;
      const char * name;
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

    struct DisconnectBaton {
      int error_code;
      const git_error* error;
      git_remote * remote;
    };
    class DisconnectWorker : public Nan::AsyncWorker {
      public:
        DisconnectWorker(
            DisconnectBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~DisconnectWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        DisconnectBaton *baton;
    };

    static NAN_METHOD(Disconnect);

    struct DownloadBaton {
      int error_code;
      const git_error* error;
      git_remote * remote;
      const git_strarray * refspecs;
      const git_fetch_options * opts;
    };
    class DownloadWorker : public Nan::AsyncWorker {
      public:
        DownloadWorker(
            DownloadBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~DownloadWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        DownloadBaton *baton;
    };

    static NAN_METHOD(Download);

    struct DupBaton {
      int error_code;
      const git_error* error;
      git_remote * dest;
      git_remote * source;
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

    struct FetchBaton {
      int error_code;
      const git_error* error;
      git_remote * remote;
      const git_strarray * refspecs;
      const git_fetch_options * opts;
      const char * reflog_message;
    };
    class FetchWorker : public Nan::AsyncWorker {
      public:
        FetchWorker(
            FetchBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~FetchWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        FetchBaton *baton;
    };

    static NAN_METHOD(Fetch);

    struct GetFetchRefspecsBaton {
      int error_code;
      const git_error* error;
      git_strarray * array;
      const git_remote * remote;
    };
    class GetFetchRefspecsWorker : public Nan::AsyncWorker {
      public:
        GetFetchRefspecsWorker(
            GetFetchRefspecsBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~GetFetchRefspecsWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        GetFetchRefspecsBaton *baton;
    };

    static NAN_METHOD(GetFetchRefspecs);

    struct GetPushRefspecsBaton {
      int error_code;
      const git_error* error;
      git_strarray * array;
      const git_remote * remote;
    };
    class GetPushRefspecsWorker : public Nan::AsyncWorker {
      public:
        GetPushRefspecsWorker(
            GetPushRefspecsBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~GetPushRefspecsWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        GetPushRefspecsBaton *baton;
    };

    static NAN_METHOD(GetPushRefspecs);

    static NAN_METHOD(GetRefspec);

    static NAN_METHOD(IsValidName);

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

    struct LookupBaton {
      int error_code;
      const git_error* error;
      git_remote * out;
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

    static NAN_METHOD(Owner);

    static NAN_METHOD(Prune);

    static NAN_METHOD(PruneRefs);

    struct PushBaton {
      int error_code;
      const git_error* error;
      git_remote * remote;
      const git_strarray * refspecs;
      const git_push_options * opts;
    };
    class PushWorker : public Nan::AsyncWorker {
      public:
        PushWorker(
            PushBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~PushWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        PushBaton *baton;
    };

    static NAN_METHOD(Push);

    static NAN_METHOD(Pushurl);

    static NAN_METHOD(RefspecCount);

    struct RenameBaton {
      int error_code;
      const git_error* error;
      git_strarray * problems;
      git_repository * repo;
      const char * name;
      const char * new_name;
    };
    class RenameWorker : public Nan::AsyncWorker {
      public:
        RenameWorker(
            RenameBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~RenameWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        RenameBaton *baton;
    };

    static NAN_METHOD(Rename);

    static NAN_METHOD(SetAutotag);

    static NAN_METHOD(SetPushurl);

    static NAN_METHOD(SetUrl);

    static NAN_METHOD(Stats);

    static NAN_METHOD(Stop);

    struct UpdateTipsBaton {
      int error_code;
      const git_error* error;
      git_remote * remote;
      const git_remote_callbacks * callbacks;
      int update_fetchhead;
      git_remote_autotag_option_t download_tags;
      const char * reflog_message;
    };
    class UpdateTipsWorker : public Nan::AsyncWorker {
      public:
        UpdateTipsWorker(
            UpdateTipsBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~UpdateTipsWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        UpdateTipsBaton *baton;
    };

    static NAN_METHOD(UpdateTips);

    struct UploadBaton {
      int error_code;
      const git_error* error;
      git_remote * remote;
      const git_strarray * refspecs;
      const git_push_options * opts;
    };
    class UploadWorker : public Nan::AsyncWorker {
      public:
        UploadWorker(
            UploadBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~UploadWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        UploadBaton *baton;
    };

    static NAN_METHOD(Upload);

    static NAN_METHOD(Url);

    struct ReferenceListBaton {
      int error_code;
      const git_error* error;
      std::vector<git_remote_head*> * out;
      git_remote * remote;
    };
    class ReferenceListWorker : public Nan::AsyncWorker {
      public:
        ReferenceListWorker(
            ReferenceListBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~ReferenceListWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        ReferenceListBaton *baton;
    };

    static NAN_METHOD(ReferenceList);
};

#endif
