// This is a generated file, modify: generate/templates/templates/class_header.h

#ifndef GITREPOSITORY_H
#define GITREPOSITORY_H
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

#include "git2/sys/repository.h"
#include "../include/submodule.h"
#include "../include/remote.h"
#include "../include/config.h"
#include "../include/buf.h"
#include "../include/oid.h"
#include "../include/reference.h"
#include "../include/index.h"
#include "../include/repository_init_options.h"
#include "../include/odb.h"
#include "../include/worktree.h"
#include "../include/refdb.h"
#include "../include/annotated_commit.h"
// Forward declaration.
struct git_repository {
};

using namespace node;
using namespace v8;

class GitRepository;

struct GitRepositoryTraits {
  typedef GitRepository cppClass;
  typedef git_repository cType;

  static const bool isDuplicable = false;
  static void duplicate(git_repository **dest, git_repository *src) {
     Nan::ThrowError("duplicate called on GitRepository which cannot be duplicated");
   }

  static const bool isSingleton = true;
  static const bool isFreeable = true;
  static void free(git_repository *raw) {
    unsigned long referenceCount = 0;
    referenceCount = ReferenceCounter::decrementCountForPointer((void *)raw);
     if (referenceCount == 0) {
      ::git_repository_free(raw); // :: to avoid calling this free recursively
    }
   }
};

class GitRepository : public
  NodeGitWrapper<GitRepositoryTraits>
{
    // grant full access to base class
    friend class NodeGitWrapper<GitRepositoryTraits>;
   public:
    static void InitializeComponent (v8::Local<v8::Object> target);

                     static int FetchheadForeach_callback_cppCallback (
      const char * refname
      ,
       const char * remote_url
      ,
       const git_oid * oid
      ,
       unsigned int is_merge
      ,
       void * payload
      );

    static void FetchheadForeach_callback_async(void *baton);
    static void FetchheadForeach_callback_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result);
    struct FetchheadForeach_CallbackBaton : public AsyncBatonWithResult<int> {
      const char * refname;
      const char * remote_url;
      const git_oid * oid;
      unsigned int is_merge;
      void * payload;
 
      FetchheadForeach_CallbackBaton(const int &defaultResult)
        : AsyncBatonWithResult<int>(defaultResult) {
        }
    };
                                                                   static int MergeheadForeach_callback_cppCallback (
      const git_oid * oid
      ,
       void * payload
      );

    static void MergeheadForeach_callback_async(void *baton);
    static void MergeheadForeach_callback_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result);
    struct MergeheadForeach_CallbackBaton : public AsyncBatonWithResult<int> {
      const git_oid * oid;
      void * payload;
 
      MergeheadForeach_CallbackBaton(const int &defaultResult)
        : AsyncBatonWithResult<int>(defaultResult) {
        }
    };
                                                                                                         

  private:
    GitRepository()
      : NodeGitWrapper<GitRepositoryTraits>(
           "A new GitRepository cannot be instantiated."
       )
    {}
    GitRepository(git_repository *raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>())
      : NodeGitWrapper<GitRepositoryTraits>(raw, selfFreeing, owner)
    {}
    ~GitRepository();
                                                                                                                                                                                         
    static NAN_METHOD(Commondir);

    struct ConfigBaton {
      int error_code;
      const git_error* error;
      git_config * out;
      git_repository * repo;
    };
    class ConfigWorker : public Nan::AsyncWorker {
      public:
        ConfigWorker(
            ConfigBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~ConfigWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        ConfigBaton *baton;
    };

    static NAN_METHOD(Config);

    static NAN_METHOD(DetachHead);

    struct DiscoverBaton {
      int error_code;
      const git_error* error;
      git_buf * out;
      const char * start_path;
      int across_fs;
      const char * ceiling_dirs;
    };
    class DiscoverWorker : public Nan::AsyncWorker {
      public:
        DiscoverWorker(
            DiscoverBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~DiscoverWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        DiscoverBaton *baton;
    };

    static NAN_METHOD(Discover);

    struct FetchheadForeachBaton {
      int error_code;
      const git_error* error;
      git_repository * repo;
      git_repository_fetchhead_foreach_cb callback;
      void * payload;
    };
    class FetchheadForeachWorker : public Nan::AsyncWorker {
      public:
        FetchheadForeachWorker(
            FetchheadForeachBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~FetchheadForeachWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        FetchheadForeachBaton *baton;
    };

    static NAN_METHOD(FetchheadForeach);

    static NAN_METHOD(GetNamespace);

    struct HeadBaton {
      int error_code;
      const git_error* error;
      git_reference * out;
      git_repository * repo;
    };
    class HeadWorker : public Nan::AsyncWorker {
      public:
        HeadWorker(
            HeadBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~HeadWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        HeadBaton *baton;
    };

    static NAN_METHOD(Head);

    static NAN_METHOD(HeadDetached);

    static NAN_METHOD(HeadDetachedForWorktree);

    struct HeadForWorktreeBaton {
      int error_code;
      const git_error* error;
      git_reference * out;
      git_repository * repo;
      const char * name;
    };
    class HeadForWorktreeWorker : public Nan::AsyncWorker {
      public:
        HeadForWorktreeWorker(
            HeadForWorktreeBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~HeadForWorktreeWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        HeadForWorktreeBaton *baton;
    };

    static NAN_METHOD(HeadForWorktree);

    static NAN_METHOD(HeadUnborn);

    static NAN_METHOD(Ident);

    struct IndexBaton {
      int error_code;
      const git_error* error;
      git_index * out;
      git_repository * repo;
    };
    class IndexWorker : public Nan::AsyncWorker {
      public:
        IndexWorker(
            IndexBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~IndexWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        IndexBaton *baton;
    };

    static NAN_METHOD(Index);

    struct InitBaton {
      int error_code;
      const git_error* error;
      git_repository * out;
      const char * path;
      unsigned int is_bare;
    };
    class InitWorker : public Nan::AsyncWorker {
      public:
        InitWorker(
            InitBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~InitWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        InitBaton *baton;
    };

    static NAN_METHOD(Init);

    struct InitExtBaton {
      int error_code;
      const git_error* error;
      git_repository * out;
      const char * repo_path;
      git_repository_init_options * opts;
    };
    class InitExtWorker : public Nan::AsyncWorker {
      public:
        InitExtWorker(
            InitExtBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~InitExtWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        InitExtBaton *baton;
    };

    static NAN_METHOD(InitExt);

    static NAN_METHOD(IsBare);

    static NAN_METHOD(IsEmpty);

    static NAN_METHOD(IsShallow);

    static NAN_METHOD(IsWorktree);

    struct ItemPathBaton {
      int error_code;
      const git_error* error;
      git_buf * out;
      const git_repository * repo;
      git_repository_item_t item;
    };
    class ItemPathWorker : public Nan::AsyncWorker {
      public:
        ItemPathWorker(
            ItemPathBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~ItemPathWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        ItemPathBaton *baton;
    };

    static NAN_METHOD(ItemPath);

    struct MergeheadForeachBaton {
      int error_code;
      const git_error* error;
      git_repository * repo;
      git_repository_mergehead_foreach_cb callback;
      void * payload;
    };
    class MergeheadForeachWorker : public Nan::AsyncWorker {
      public:
        MergeheadForeachWorker(
            MergeheadForeachBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~MergeheadForeachWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        MergeheadForeachBaton *baton;
    };

    static NAN_METHOD(MergeheadForeach);

    static NAN_METHOD(MessageRemove);

    struct OdbBaton {
      int error_code;
      const git_error* error;
      git_odb * out;
      git_repository * repo;
    };
    class OdbWorker : public Nan::AsyncWorker {
      public:
        OdbWorker(
            OdbBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~OdbWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        OdbBaton *baton;
    };

    static NAN_METHOD(Odb);

    struct OpenBaton {
      int error_code;
      const git_error* error;
      git_repository * out;
      const char * path;
    };
    class OpenWorker : public Nan::AsyncWorker {
      public:
        OpenWorker(
            OpenBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~OpenWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        OpenBaton *baton;
    };

    static NAN_METHOD(Open);

    struct OpenBareBaton {
      int error_code;
      const git_error* error;
      git_repository * out;
      const char * bare_path;
    };
    class OpenBareWorker : public Nan::AsyncWorker {
      public:
        OpenBareWorker(
            OpenBareBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~OpenBareWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        OpenBareBaton *baton;
    };

    static NAN_METHOD(OpenBare);

    struct OpenExtBaton {
      int error_code;
      const git_error* error;
      git_repository * out;
      const char * path;
      unsigned int flags;
      const char * ceiling_dirs;
    };
    class OpenExtWorker : public Nan::AsyncWorker {
      public:
        OpenExtWorker(
            OpenExtBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~OpenExtWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        OpenExtBaton *baton;
    };

    static NAN_METHOD(OpenExt);

    struct OpenFromWorktreeBaton {
      int error_code;
      const git_error* error;
      git_repository * out;
      git_worktree * wt;
    };
    class OpenFromWorktreeWorker : public Nan::AsyncWorker {
      public:
        OpenFromWorktreeWorker(
            OpenFromWorktreeBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~OpenFromWorktreeWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        OpenFromWorktreeBaton *baton;
    };

    static NAN_METHOD(OpenFromWorktree);

    static NAN_METHOD(Path);

    struct RefdbBaton {
      int error_code;
      const git_error* error;
      git_refdb * out;
      git_repository * repo;
    };
    class RefdbWorker : public Nan::AsyncWorker {
      public:
        RefdbWorker(
            RefdbBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~RefdbWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        RefdbBaton *baton;
    };

    static NAN_METHOD(Refdb);

    struct SetHeadBaton {
      int error_code;
      const git_error* error;
      git_repository * repo;
      const char * refname;
    };
    class SetHeadWorker : public Nan::AsyncWorker {
      public:
        SetHeadWorker(
            SetHeadBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~SetHeadWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        SetHeadBaton *baton;
    };

    static NAN_METHOD(SetHead);

    static NAN_METHOD(SetHeadDetached);

    static NAN_METHOD(SetHeadDetachedFromAnnotated);

    static NAN_METHOD(SetIdent);

    static NAN_METHOD(SetNamespace);

    static NAN_METHOD(SetWorkdir);

    static NAN_METHOD(State);

    static NAN_METHOD(StateCleanup);

    static NAN_METHOD(Workdir);

    struct WrapOdbBaton {
      int error_code;
      const git_error* error;
      git_repository * out;
      git_odb * odb;
    };
    class WrapOdbWorker : public Nan::AsyncWorker {
      public:
        WrapOdbWorker(
            WrapOdbBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~WrapOdbWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        WrapOdbBaton *baton;
    };

    static NAN_METHOD(WrapOdb);

    struct CleanupBaton {
      int error_code;
      const git_error* error;
      git_repository * repo;
    };
    class CleanupWorker : public Nan::AsyncWorker {
      public:
        CleanupWorker(
            CleanupBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~CleanupWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        CleanupBaton *baton;
    };

    static NAN_METHOD(Cleanup);

    struct GetReferencesBaton {
      int error_code;
      const git_error* error;
      std::vector<git_reference *> * out;
      git_repository * repo;
    };
    class GetReferencesWorker : public Nan::AsyncWorker {
      public:
        GetReferencesWorker(
            GetReferencesBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~GetReferencesWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        GetReferencesBaton *baton;
    };

    static NAN_METHOD(GetReferences);

    struct GetSubmodulesBaton {
      int error_code;
      const git_error* error;
      std::vector<git_submodule *> * out;
      git_repository * repo;
    };
    class GetSubmodulesWorker : public Nan::AsyncWorker {
      public:
        GetSubmodulesWorker(
            GetSubmodulesBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~GetSubmodulesWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        GetSubmodulesBaton *baton;
    };

    static NAN_METHOD(GetSubmodules);

    struct GetRemotesBaton {
      int error_code;
      const git_error* error;
      std::vector<git_remote *> * out;
      git_repository * repo;
    };
    class GetRemotesWorker : public Nan::AsyncWorker {
      public:
        GetRemotesWorker(
            GetRemotesBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~GetRemotesWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        GetRemotesBaton *baton;
    };

    static NAN_METHOD(GetRemotes);

    struct RefreshReferencesBaton {
      int error_code;
      const git_error* error;
      void * out;
      git_repository * repo;
    };
    class RefreshReferencesWorker : public Nan::AsyncWorker {
      public:
        RefreshReferencesWorker(
            RefreshReferencesBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~RefreshReferencesWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        RefreshReferencesBaton *baton;
    };

    static NAN_METHOD(RefreshReferences);

    static NAN_METHOD(SetIndex);

    static NAN_METHOD(SubmoduleCacheAll);

    static NAN_METHOD(SubmoduleCacheClear);

    struct FetchheadForeach_globalPayload {
      Nan::Callback * callback;

      FetchheadForeach_globalPayload() {
        callback = NULL;
      }

      ~FetchheadForeach_globalPayload() {
        if (callback != NULL) {
          delete callback;
        }
      }
    };

    struct MergeheadForeach_globalPayload {
      Nan::Callback * callback;

      MergeheadForeach_globalPayload() {
        callback = NULL;
      }

      ~MergeheadForeach_globalPayload() {
        if (callback != NULL) {
          delete callback;
        }
      }
    };
};

#endif
