// This is a generated file, modify: generate/templates/templates/struct_header.h

#ifndef GITFETCHOPTIONS_H
#define GITFETCHOPTIONS_H
#include <nan.h>
#include <string>
#include <queue>
#include <utility>
#include <unordered_map>

#include "async_baton.h"
#include "callback_wrapper.h"
#include "reference_counter.h"
#include "nodegit_wrapper.h"

extern "C" {
  #include <git2.h>
 }

  #include "../include/str_array_converter.h"
  #include "../include/remote_callbacks.h"
  #include "../include/proxy_options.h"
  #include "../include/strarray.h"
 
using namespace node;
using namespace v8;

class GitFetchOptions;

struct GitFetchOptionsTraits {
  typedef GitFetchOptions cppClass;
  typedef git_fetch_options cType;

  static const bool isDuplicable = false;
  static void duplicate(git_fetch_options **dest, git_fetch_options *src) {
     Nan::ThrowError("duplicate called on GitFetchOptions which cannot be duplicated");
   }

  static const bool isSingleton = false;
  static const bool isFreeable = true;
  static void free(git_fetch_options *raw) {
    unsigned long referenceCount = 0;
     if (referenceCount == 0) {
      ::free(raw); // :: to avoid calling this free recursively
    }
   }
};
 class GitFetchOptions : public NodeGitWrapper<GitFetchOptionsTraits> {
    // grant full access to base class
    friend class NodeGitWrapper<GitFetchOptionsTraits>;
  public:
    GitFetchOptions(git_fetch_options* raw, bool selfFreeing, v8::Local<v8::Object> owner = v8::Local<v8::Object>());
    static void InitializeComponent (v8::Local<v8::Object> target);

               
  private:
    GitFetchOptions();
    ~GitFetchOptions();

    void ConstructFields();

  
        static NAN_GETTER(GetVersion);
        static NAN_SETTER(SetVersion);

             Nan::Persistent<Object> callbacks;
  
        static NAN_GETTER(GetCallbacks);
        static NAN_SETTER(SetCallbacks);

  
        static NAN_GETTER(GetPrune);
        static NAN_SETTER(SetPrune);

             Nan::Persistent<Object> proxy_opts;
  
        static NAN_GETTER(GetProxyOpts);
        static NAN_SETTER(SetProxyOpts);

   
        static NAN_GETTER(GetUpdateFetchhead);
        static NAN_SETTER(SetUpdateFetchhead);

  
        static NAN_GETTER(GetDownloadTags);
        static NAN_SETTER(SetDownloadTags);

             Nan::Persistent<Object> custom_headers;
  
        static NAN_GETTER(GetCustomHeaders);
        static NAN_SETTER(SetCustomHeaders);

  };

#endif
