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
#include "../include/cherrypick_options.h"
#include "nodegit_wrapper.cc"

  #include "../include/merge_options.h"
  #include "../include/checkout_options.h"
 
using namespace v8;
using namespace node;
using namespace std;


// generated from struct_content.cc
GitCherrypickOptions::GitCherrypickOptions() : NodeGitWrapper<GitCherrypickOptionsTraits>(NULL, true, v8::Local<v8::Object>())
{
        git_cherrypick_options wrappedValue = GIT_CHERRYPICK_OPTIONS_INIT;
      this->raw = (git_cherrypick_options*) malloc(sizeof(git_cherrypick_options));
      memcpy(this->raw, &wrappedValue, sizeof(git_cherrypick_options));
  
  this->ConstructFields();
}

GitCherrypickOptions::GitCherrypickOptions(git_cherrypick_options* raw, bool selfFreeing, v8::Local<v8::Object> owner)
 : NodeGitWrapper<GitCherrypickOptionsTraits>(raw, selfFreeing, owner)
{
  this->ConstructFields();
}

GitCherrypickOptions::~GitCherrypickOptions() {
                this->merge_opts.Reset();
             this->checkout_opts.Reset();
    }

void GitCherrypickOptions::ConstructFields() {
                v8::Local<Object> merge_optsTemp = Nan::To<v8::Object>(GitMergeOptions::New(
&this->raw->merge_opts,
            false
          )).ToLocalChecked();
          this->merge_opts.Reset(merge_optsTemp);

             v8::Local<Object> checkout_optsTemp = Nan::To<v8::Object>(GitCheckoutOptions::New(
&this->raw->checkout_opts,
            false
          )).ToLocalChecked();
          this->checkout_opts.Reset(checkout_optsTemp);

    }

void GitCherrypickOptions::InitializeComponent(v8::Local<v8::Object> target) {
  Nan::HandleScope scope;

  v8::Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(JSNewFunction);

  tpl->InstanceTemplate()->SetInternalFieldCount(1);
  tpl->SetClassName(Nan::New("CherrypickOptions").ToLocalChecked());

      Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("version").ToLocalChecked(), GetVersion, SetVersion);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("mainline").ToLocalChecked(), GetMainline, SetMainline);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("mergeOpts").ToLocalChecked(), GetMergeOpts, SetMergeOpts);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("checkoutOpts").ToLocalChecked(), GetCheckoutOpts, SetCheckoutOpts);
   
  InitializeTemplate(tpl);

  v8::Local<Function> _constructor_template = Nan::GetFunction(tpl).ToLocalChecked();
  constructor_template.Reset(_constructor_template);
  Nan::Set(target, Nan::New("CherrypickOptions").ToLocalChecked(), _constructor_template);
}

    NAN_GETTER(GitCherrypickOptions::GetVersion) {

      GitCherrypickOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCherrypickOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->version));
     }

    NAN_SETTER(GitCherrypickOptions::SetVersion) {
      GitCherrypickOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCherrypickOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->version = (unsigned int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitCherrypickOptions::GetMainline) {

      GitCherrypickOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCherrypickOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->mainline));
     }

    NAN_SETTER(GitCherrypickOptions::SetMainline) {
      GitCherrypickOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCherrypickOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->mainline = (unsigned int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitCherrypickOptions::GetMergeOpts) {

      GitCherrypickOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCherrypickOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->merge_opts));

     }

    NAN_SETTER(GitCherrypickOptions::SetMergeOpts) {
      GitCherrypickOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCherrypickOptions>(info.This());

        v8::Local<Object> merge_opts(Nan::To<v8::Object>(value).ToLocalChecked());

        wrapper->merge_opts.Reset(merge_opts);

        wrapper->raw->merge_opts = *  Nan::ObjectWrap::Unwrap<GitMergeOptions>(Nan::To<v8::Object>(merge_opts).ToLocalChecked())->GetValue() ;

     }

      NAN_GETTER(GitCherrypickOptions::GetCheckoutOpts) {

      GitCherrypickOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCherrypickOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->checkout_opts));

     }

    NAN_SETTER(GitCherrypickOptions::SetCheckoutOpts) {
      GitCherrypickOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCherrypickOptions>(info.This());

        v8::Local<Object> checkout_opts(Nan::To<v8::Object>(value).ToLocalChecked());

        wrapper->checkout_opts.Reset(checkout_opts);

        wrapper->raw->checkout_opts = *  Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(Nan::To<v8::Object>(checkout_opts).ToLocalChecked())->GetValue() ;

     }

   
// force base class template instantiation, to make sure we get all the
// methods, statics, etc.
template class NodeGitWrapper<GitCherrypickOptionsTraits>;
