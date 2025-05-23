// This is a generated file, modify: generate/templates/templates/struct_content.cc

#include <nan.h>
#include <string.h>
#ifdef WIN32
#include <windows.h>
#else
#include <unistd.h>
#endif // win32

extern "C" {
  #include <git2.h>
 }

#include <iostream>
#include "../include/nodegit.h"
#include "../include/lock_master.h"
#include "../include/functions/copy.h"
#include "../include/fetch_options.h"
#include "nodegit_wrapper.cc"

  #include "../include/str_array_converter.h"
  #include "../include/remote_callbacks.h"
  #include "../include/proxy_options.h"
  #include "../include/strarray.h"
 
using namespace v8;
using namespace node;
using namespace std;


// generated from struct_content.cc
GitFetchOptions::GitFetchOptions() : NodeGitWrapper<GitFetchOptionsTraits>(NULL, true, v8::Local<v8::Object>())
{
        git_fetch_options wrappedValue = GIT_FETCH_OPTIONS_INIT;
      this->raw = (git_fetch_options*) malloc(sizeof(git_fetch_options));
      memcpy(this->raw, &wrappedValue, sizeof(git_fetch_options));
  
  this->ConstructFields();
}

GitFetchOptions::GitFetchOptions(git_fetch_options* raw, bool selfFreeing, v8::Local<v8::Object> owner)
 : NodeGitWrapper<GitFetchOptionsTraits>(raw, selfFreeing, owner)
{
  this->ConstructFields();
}

GitFetchOptions::~GitFetchOptions() {
             this->callbacks.Reset();
               this->proxy_opts.Reset();
                  this->custom_headers.Reset();
    }

void GitFetchOptions::ConstructFields() {
             v8::Local<Object> callbacksTemp = Nan::To<v8::Object>(GitRemoteCallbacks::New(
&this->raw->callbacks,
            false
          )).ToLocalChecked();
          this->callbacks.Reset(callbacksTemp);

               v8::Local<Object> proxy_optsTemp = Nan::To<v8::Object>(GitProxyOptions::New(
&this->raw->proxy_opts,
            false
          )).ToLocalChecked();
          this->proxy_opts.Reset(proxy_optsTemp);

                  v8::Local<Object> custom_headersTemp = Nan::To<v8::Object>(GitStrarray::New(
&this->raw->custom_headers,
            false
          )).ToLocalChecked();
          this->custom_headers.Reset(custom_headersTemp);

    }

void GitFetchOptions::InitializeComponent(v8::Local<v8::Object> target) {
  Nan::HandleScope scope;

  v8::Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(JSNewFunction);

  tpl->InstanceTemplate()->SetInternalFieldCount(1);
  tpl->SetClassName(Nan::New("FetchOptions").ToLocalChecked());

      Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("version").ToLocalChecked(), GetVersion, SetVersion);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("callbacks").ToLocalChecked(), GetCallbacks, SetCallbacks);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("prune").ToLocalChecked(), GetPrune, SetPrune);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("proxyOpts").ToLocalChecked(), GetProxyOpts, SetProxyOpts);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("updateFetchhead").ToLocalChecked(), GetUpdateFetchhead, SetUpdateFetchhead);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("downloadTags").ToLocalChecked(), GetDownloadTags, SetDownloadTags);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("customHeaders").ToLocalChecked(), GetCustomHeaders, SetCustomHeaders);
   
  InitializeTemplate(tpl);

  v8::Local<Function> _constructor_template = Nan::GetFunction(tpl).ToLocalChecked();
  constructor_template.Reset(_constructor_template);
  Nan::Set(target, Nan::New("FetchOptions").ToLocalChecked(), _constructor_template);
}

    NAN_GETTER(GitFetchOptions::GetVersion) {

      GitFetchOptions *wrapper = Nan::ObjectWrap::Unwrap<GitFetchOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->version));
     }

    NAN_SETTER(GitFetchOptions::SetVersion) {
      GitFetchOptions *wrapper = Nan::ObjectWrap::Unwrap<GitFetchOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->version = (int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitFetchOptions::GetCallbacks) {

      GitFetchOptions *wrapper = Nan::ObjectWrap::Unwrap<GitFetchOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->callbacks));

     }

    NAN_SETTER(GitFetchOptions::SetCallbacks) {
      GitFetchOptions *wrapper = Nan::ObjectWrap::Unwrap<GitFetchOptions>(info.This());

        v8::Local<Object> callbacks(Nan::To<v8::Object>(value).ToLocalChecked());

        wrapper->callbacks.Reset(callbacks);

        wrapper->raw->callbacks = *  Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(Nan::To<v8::Object>(callbacks).ToLocalChecked())->GetValue() ;

     }

      NAN_GETTER(GitFetchOptions::GetPrune) {

      GitFetchOptions *wrapper = Nan::ObjectWrap::Unwrap<GitFetchOptions>(info.This());

        info.GetReturnValue().Set(Nan::New((int)wrapper->GetValue()->prune));

     }

    NAN_SETTER(GitFetchOptions::SetPrune) {
      GitFetchOptions *wrapper = Nan::ObjectWrap::Unwrap<GitFetchOptions>(info.This());

        if (value->IsNumber()) {
          wrapper->GetValue()->prune = (git_fetch_prune_t) Nan::To<int32_t>(value).FromJust();
        }

     }

      NAN_GETTER(GitFetchOptions::GetProxyOpts) {

      GitFetchOptions *wrapper = Nan::ObjectWrap::Unwrap<GitFetchOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->proxy_opts));

     }

    NAN_SETTER(GitFetchOptions::SetProxyOpts) {
      GitFetchOptions *wrapper = Nan::ObjectWrap::Unwrap<GitFetchOptions>(info.This());

        v8::Local<Object> proxy_opts(Nan::To<v8::Object>(value).ToLocalChecked());

        wrapper->proxy_opts.Reset(proxy_opts);

        wrapper->raw->proxy_opts = *  Nan::ObjectWrap::Unwrap<GitProxyOptions>(Nan::To<v8::Object>(proxy_opts).ToLocalChecked())->GetValue() ;

     }

      NAN_GETTER(GitFetchOptions::GetUpdateFetchhead) {

      GitFetchOptions *wrapper = Nan::ObjectWrap::Unwrap<GitFetchOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->update_fetchhead));
     }

    NAN_SETTER(GitFetchOptions::SetUpdateFetchhead) {
      GitFetchOptions *wrapper = Nan::ObjectWrap::Unwrap<GitFetchOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->update_fetchhead = (int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitFetchOptions::GetDownloadTags) {

      GitFetchOptions *wrapper = Nan::ObjectWrap::Unwrap<GitFetchOptions>(info.This());

        info.GetReturnValue().Set(Nan::New((int)wrapper->GetValue()->download_tags));

     }

    NAN_SETTER(GitFetchOptions::SetDownloadTags) {
      GitFetchOptions *wrapper = Nan::ObjectWrap::Unwrap<GitFetchOptions>(info.This());

        if (value->IsNumber()) {
          wrapper->GetValue()->download_tags = (git_remote_autotag_option_t) Nan::To<int32_t>(value).FromJust();
        }

     }

      NAN_GETTER(GitFetchOptions::GetCustomHeaders) {

      GitFetchOptions *wrapper = Nan::ObjectWrap::Unwrap<GitFetchOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->custom_headers));

     }

    NAN_SETTER(GitFetchOptions::SetCustomHeaders) {
      GitFetchOptions *wrapper = Nan::ObjectWrap::Unwrap<GitFetchOptions>(info.This());

        v8::Local<Object> custom_headers(Nan::To<v8::Object>(value).ToLocalChecked());

        wrapper->custom_headers.Reset(custom_headers);

        wrapper->raw->custom_headers = * StrArrayConverter::Convert(Nan::To<v8::Object>(custom_headers).ToLocalChecked()) ;

     }

   
// force base class template instantiation, to make sure we get all the
// methods, statics, etc.
template class NodeGitWrapper<GitFetchOptionsTraits>;
