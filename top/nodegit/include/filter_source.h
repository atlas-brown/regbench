// This is a generated file, modify: generate/templates/templates/class_header.h

#ifndef GITFILTERSOURCE_H
#define GITFILTERSOURCE_H
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
#include <git2/sys/filter.h>
}

#include "../include/typedefs.h"

#include "../include/repository.h"
#include "../include/oid.h"
// Forward declaration.
struct git_filter_source {
};

using namespace node;
using namespace v8;

class GitFilterSource;

struct GitFilterSourceTraits {
  typedef GitFilterSource cppClass;
  typedef git_filter_source cType;

  static const bool isDuplicable = false;
  static void duplicate(git_filter_source **dest, git_filter_source *src) {
     Nan::ThrowError("duplicate called on GitFilterSource which cannot be duplicated");
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_filter_source *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::free(raw); // :: to avoid calling this free recursively
    }
   }
};

class GitFilterSource : public
  NodeGitWrapper<GitFilterSourceTraits>
{
    // grant full access to base class
    friend class NodeGitWrapper<GitFilterSourceTraits>;
   public:
    static void InitializeComponent (v8::Local<v8::Object> target);

                    

  private:
    GitFilterSource()
      : NodeGitWrapper<GitFilterSourceTraits>(
           "A new GitFilterSource cannot be instantiated."
       )
    {}
    GitFilterSource(git_filter_source *raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>())
      : NodeGitWrapper<GitFilterSourceTraits>(raw, selfFreeing, owner)
    {}
    ~GitFilterSource();
                    
    struct RepoBaton {
      int error_code;
      const git_error* error;
      git_repository * out;
      const git_filter_source * src;
    };
    class RepoWorker : public Nan::AsyncWorker {
      public:
        RepoWorker(
            RepoBaton *_baton,
            Nan::Callback *callback
        ) : Nan::AsyncWorker(callback)
          , baton(_baton) {};
        ~RepoWorker() {};
        void Execute();
        void HandleOKCallback();

      private:
        RepoBaton *baton;
    };

    static NAN_METHOD(Repo);

    static NAN_METHOD(Path);

    static NAN_METHOD(Filemode);

    static NAN_METHOD(Id);

    static NAN_METHOD(Mode);

    static NAN_METHOD(Flags);
};

#endif
