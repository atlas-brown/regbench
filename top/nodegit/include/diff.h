// This is a generated file, modify: generate/templates/templates/class_header.h

#ifndef GITDIFF_H
#define GITDIFF_H
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
#include <git2/sys/diff.h>
}

#include "../include/typedefs.h"

#include "../include/blob.h"
#include "../include/diff_options.h"
#include "../include/diff_delta.h"
#include "../include/diff_binary.h"
#include "../include/diff_hunk.h"
#include "../include/diff_line.h"
#include "../include/diff_find_options.h"
#include "../include/diff_stats.h"
#include "../include/repository.h"
#include "../include/index.h"
#include "../include/oid.h"
#include "../include/diff_patchid_options.h"
#include "../include/buf.h"
#include "../include/tree.h"
#include "../include/diff_perfdata.h"
// Forward declaration.
struct git_diff {
};

using namespace node;
using namespace v8;

class GitDiff;

struct GitDiffTraits {
  typedef GitDiff cppClass;
  typedef git_diff cType;

  static const bool isDuplicable = false;
  static void duplicate(git_diff **dest, git_diff *src) {
     Nan::ThrowError("duplicate called on GitDiff which cannot be duplicated");
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_diff *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::git_diff_free(raw); // :: to avoid calling this free recursively
    }
   }
};

class GitDiff : public
  NodeGitWrapper<GitDiffTraits>
{
    // grant full access to base class
    friend class NodeGitWrapper<GitDiffTraits>;
   public:
    static void InitializeComponent (v8::Local<v8::Object> target);

          static int BlobToBuffer_file_cb_cppCallback (
      const git_diff_delta * delta
      ,
       float progress
      ,
       void * payload
      );

    static void BlobToBuffer_file_cb_async(void *baton);
    static void BlobToBuffer_file_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result);
    struct BlobToBuffer_FileCbBaton : public AsyncBatonWithResult<int> {
      const git_diff_delta * delta;
      float progress;
      void * payload;
 
      BlobToBuffer_FileCbBaton(const int &defaultResult)
        : AsyncBatonWithResult<int>(defaultResult) {
        }
    };
     static int BlobToBuffer_binary_cb_cppCallback (
      const git_diff_delta * delta
      ,
       const git_diff_binary * binary
      ,
       void * payload
      );

    static void BlobToBuffer_binary_cb_async(void *baton);
    static void BlobToBuffer_binary_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result);
    struct BlobToBuffer_BinaryCbBaton : public AsyncBatonWithResult<int> {
      const git_diff_delta * delta;
      const git_diff_binary * binary;
      void * payload;
 
      BlobToBuffer_BinaryCbBaton(const int &defaultResult)
        : AsyncBatonWithResult<int>(defaultResult) {
        }
    };
     static int BlobToBuffer_hunk_cb_cppCallback (
      const git_diff_delta * delta
      ,
       const git_diff_hunk * hunk
      ,
       void * payload
      );

    static void BlobToBuffer_hunk_cb_async(void *baton);
    static void BlobToBuffer_hunk_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result);
    struct BlobToBuffer_HunkCbBaton : public AsyncBatonWithResult<int> {
      const git_diff_delta * delta;
      const git_diff_hunk * hunk;
      void * payload;
 
      BlobToBuffer_HunkCbBaton(const int &defaultResult)
        : AsyncBatonWithResult<int>(defaultResult) {
        }
    };
     static int BlobToBuffer_line_cb_cppCallback (
      const git_diff_delta * delta
      ,
       const git_diff_hunk * hunk
      ,
       const git_diff_line * line
      ,
       void * payload
      );

    static void BlobToBuffer_line_cb_async(void *baton);
    static void BlobToBuffer_line_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result);
    struct BlobToBuffer_LineCbBaton : public AsyncBatonWithResult<int> {
      const git_diff_delta * delta;
      const git_diff_hunk * hunk;
      const git_diff_line * line;
      void * payload;
 
      BlobToBuffer_LineCbBaton(const int &defaultResult)
        : AsyncBatonWithResult<int>(defaultResult) {
        }
    };
                                                                                     

  private:
    GitDiff()
      : NodeGitWrapper<GitDiffTraits>(
           "A new GitDiff cannot be instantiated."
       )
    {}
    GitDiff(git_diff *raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>())
      : NodeGitWrapper<GitDiffTraits>(raw, selfFreeing, owner)
    {}
    ~GitDiff();
                                                                                              
    struct BlobToBufferBaton {
      int error_code;
      const git_error* error;
      const git_blob * old_blob;
      const char * old_as_path;
      const char * buffer;
      size_t buffer_len;
      const char * buffer_as_path;
      const git_diff_options * options;
      git_diff_file_cb file_cb;
      git_diff_binary_cb binary_cb;
      git_diff_hunk_cb hunk_cb;
      git_diff_line_cb line_cb;
      void * payload;
    };
    class BlobToBufferWorker : public Nan::AsyncWorker {
      public:
        BlobToBufferWorker(
            BlobToBufferBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~BlobToBufferWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        BlobToBufferBaton *baton;
    };

    static NAN_METHOD(BlobToBuffer);

    struct FindSimilarBaton {
      int error_code;
      const git_error* error;
      git_diff * diff;
      const git_diff_find_options * options;
    };
    class FindSimilarWorker : public Nan::AsyncWorker {
      public:
        FindSimilarWorker(
            FindSimilarBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~FindSimilarWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        FindSimilarBaton *baton;
    };

    static NAN_METHOD(FindSimilar);

    struct FromBufferBaton {
      int error_code;
      const git_error* error;
      git_diff * out;
      const char * content;
      size_t content_len;
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

    static NAN_METHOD(GetDelta);

    struct GetStatsBaton {
      int error_code;
      const git_error* error;
      git_diff_stats * out;
      git_diff * diff;
    };
    class GetStatsWorker : public Nan::AsyncWorker {
      public:
        GetStatsWorker(
            GetStatsBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~GetStatsWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        GetStatsBaton *baton;
    };

    static NAN_METHOD(GetStats);

    struct IndexToIndexBaton {
      int error_code;
      const git_error* error;
      git_diff * diff;
      git_repository * repo;
      git_index * old_index;
      git_index * new_index;
      const git_diff_options * opts;
    };
    class IndexToIndexWorker : public Nan::AsyncWorker {
      public:
        IndexToIndexWorker(
            IndexToIndexBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~IndexToIndexWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        IndexToIndexBaton *baton;
    };

    static NAN_METHOD(IndexToIndex);

    struct IndexToWorkdirBaton {
      int error_code;
      const git_error* error;
      git_diff * diff;
      git_repository * repo;
      git_index * index;
      const git_diff_options * opts;
    };
    class IndexToWorkdirWorker : public Nan::AsyncWorker {
      public:
        IndexToWorkdirWorker(
            IndexToWorkdirBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~IndexToWorkdirWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        IndexToWorkdirBaton *baton;
    };

    static NAN_METHOD(IndexToWorkdir);

    static NAN_METHOD(IsSortedIcase);

    struct MergeBaton {
      int error_code;
      const git_error* error;
      git_diff * onto;
      const git_diff * from;
    };
    class MergeWorker : public Nan::AsyncWorker {
      public:
        MergeWorker(
            MergeBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~MergeWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        MergeBaton *baton;
    };

    static NAN_METHOD(Merge);

    static NAN_METHOD(NumDeltas);

    struct PatchidBaton {
      int error_code;
      const git_error* error;
      git_oid * out;
      git_diff * diff;
      git_diff_patchid_options * opts;
    };
    class PatchidWorker : public Nan::AsyncWorker {
      public:
        PatchidWorker(
            PatchidBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~PatchidWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        PatchidBaton *baton;
    };

    static NAN_METHOD(Patchid);

    struct ToBufBaton {
      int error_code;
      const git_error* error;
      git_buf * out;
      git_diff * diff;
      git_diff_format_t format;
    };
    class ToBufWorker : public Nan::AsyncWorker {
      public:
        ToBufWorker(
            ToBufBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~ToBufWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        ToBufBaton *baton;
    };

    static NAN_METHOD(ToBuf);

    struct TreeToIndexBaton {
      int error_code;
      const git_error* error;
      git_diff * diff;
      git_repository * repo;
      git_tree * old_tree;
      git_index * index;
      const git_diff_options * opts;
    };
    class TreeToIndexWorker : public Nan::AsyncWorker {
      public:
        TreeToIndexWorker(
            TreeToIndexBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~TreeToIndexWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        TreeToIndexBaton *baton;
    };

    static NAN_METHOD(TreeToIndex);

    struct TreeToTreeBaton {
      int error_code;
      const git_error* error;
      git_diff * diff;
      git_repository * repo;
      git_tree * old_tree;
      git_tree * new_tree;
      const git_diff_options * opts;
    };
    class TreeToTreeWorker : public Nan::AsyncWorker {
      public:
        TreeToTreeWorker(
            TreeToTreeBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~TreeToTreeWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        TreeToTreeBaton *baton;
    };

    static NAN_METHOD(TreeToTree);

    struct TreeToWorkdirBaton {
      int error_code;
      const git_error* error;
      git_diff * diff;
      git_repository * repo;
      git_tree * old_tree;
      const git_diff_options * opts;
    };
    class TreeToWorkdirWorker : public Nan::AsyncWorker {
      public:
        TreeToWorkdirWorker(
            TreeToWorkdirBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~TreeToWorkdirWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        TreeToWorkdirBaton *baton;
    };

    static NAN_METHOD(TreeToWorkdir);

    struct TreeToWorkdirWithIndexBaton {
      int error_code;
      const git_error* error;
      git_diff * diff;
      git_repository * repo;
      git_tree * old_tree;
      const git_diff_options * opts;
    };
    class TreeToWorkdirWithIndexWorker : public Nan::AsyncWorker {
      public:
        TreeToWorkdirWithIndexWorker(
            TreeToWorkdirWithIndexBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~TreeToWorkdirWithIndexWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        TreeToWorkdirWithIndexBaton *baton;
    };

    static NAN_METHOD(TreeToWorkdirWithIndex);

    static NAN_METHOD(GetPerfdata);

    struct BlobToBuffer_globalPayload {
      Nan::Callback * file_cb;
      Nan::Callback * binary_cb;
      Nan::Callback * hunk_cb;
      Nan::Callback * line_cb;

      BlobToBuffer_globalPayload() {
        file_cb = NULL;
        binary_cb = NULL;
        hunk_cb = NULL;
        line_cb = NULL;
      }

      ~BlobToBuffer_globalPayload() {
        if (file_cb != NULL) {
          delete file_cb;
        }
        if (binary_cb != NULL) {
          delete binary_cb;
        }
        if (hunk_cb != NULL) {
          delete hunk_cb;
        }
        if (line_cb != NULL) {
          delete line_cb;
        }
      }
    };
};

#endif
