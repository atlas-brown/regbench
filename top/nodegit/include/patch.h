// This is a generated file, modify: generate/templates/templates/class_header.h

#ifndef GITPATCH_H
#define GITPATCH_H
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

#include "../include/convenient_patch.h"
#include "../include/blob.h"
#include "../include/diff_options.h"
#include "../include/diff.h"
#include "../include/diff_delta.h"
#include "../include/diff_hunk.h"
#include "../include/diff_line.h"
// Forward declaration.
struct git_patch {
};

using namespace node;
using namespace v8;

class GitPatch;

struct GitPatchTraits {
  typedef GitPatch cppClass;
  typedef git_patch cType;

  static const bool isDuplicable = false;
  static void duplicate(git_patch **dest, git_patch *src) {
     Nan::ThrowError("duplicate called on GitPatch which cannot be duplicated");
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_patch *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::git_patch_free(raw); // :: to avoid calling this free recursively
    }
   }
};

class GitPatch : public
  NodeGitWrapper<GitPatchTraits>
{
    // grant full access to base class
    friend class NodeGitWrapper<GitPatchTraits>;
   public:
    static void InitializeComponent (v8::Local<v8::Object> target);

                                                    

  private:
    GitPatch()
      : NodeGitWrapper<GitPatchTraits>(
           "A new GitPatch cannot be instantiated."
       )
    {}
    GitPatch(git_patch *raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>())
      : NodeGitWrapper<GitPatchTraits>(raw, selfFreeing, owner)
    {}
    ~GitPatch();
                                                    
    struct FromBlobsBaton {
      int error_code;
      const git_error* error;
      git_patch * out;
      const git_blob * old_blob;
      const char * old_as_path;
      const git_blob * new_blob;
      const char * new_as_path;
      const git_diff_options * opts;
    };
    class FromBlobsWorker : public Nan::AsyncWorker {
      public:
        FromBlobsWorker(
            FromBlobsBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~FromBlobsWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        FromBlobsBaton *baton;
    };

    static NAN_METHOD(FromBlobs);

    struct FromDiffBaton {
      int error_code;
      const git_error* error;
      git_patch * out;
      git_diff * diff;
      size_t idx;
    };
    class FromDiffWorker : public Nan::AsyncWorker {
      public:
        FromDiffWorker(
            FromDiffBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~FromDiffWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        FromDiffBaton *baton;
    };

    static NAN_METHOD(FromDiff);

    static NAN_METHOD(GetDelta);

    struct GetHunkBaton {
      int error_code;
      const git_error* error;
      const git_diff_hunk * out;
      size_t * lines_in_hunk;
      git_patch * patch;
      size_t hunk_idx;
    };
    class GetHunkWorker : public Nan::AsyncWorker {
      public:
        GetHunkWorker(
            GetHunkBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~GetHunkWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        GetHunkBaton *baton;
    };

    static NAN_METHOD(GetHunk);

    struct GetLineInHunkBaton {
      int error_code;
      const git_error* error;
      const git_diff_line * out;
      git_patch * patch;
      size_t hunk_idx;
      size_t line_of_hunk;
    };
    class GetLineInHunkWorker : public Nan::AsyncWorker {
      public:
        GetLineInHunkWorker(
            GetLineInHunkBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~GetLineInHunkWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        GetLineInHunkBaton *baton;
    };

    static NAN_METHOD(GetLineInHunk);

    static NAN_METHOD(LineStats);

    static NAN_METHOD(NumHunks);

    static NAN_METHOD(NumLinesInHunk);

    static NAN_METHOD(Size);

    struct ConvenientFromDiffBaton {
      int error_code;
      const git_error* error;
      git_diff * diff;
      std::vector<PatchData*> * out;
    };
    class ConvenientFromDiffWorker : public Nan::AsyncWorker {
      public:
        ConvenientFromDiffWorker(
            ConvenientFromDiffBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~ConvenientFromDiffWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        ConvenientFromDiffBaton *baton;
    };

    static NAN_METHOD(ConvenientFromDiff);
};

#endif
