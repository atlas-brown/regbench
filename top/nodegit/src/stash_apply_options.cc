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
#include "../include/stash_apply_options.h"
#include "nodegit_wrapper.cc"

  #include "../include/checkout_options.h"
 
using namespace v8;
using namespace node;
using namespace std;


// generated from struct_content.cc
GitStashApplyOptions::GitStashApplyOptions() : NodeGitWrapper<GitStashApplyOptionsTraits>(NULL, true, v8::Local<v8::Object>())
{
        git_stash_apply_options wrappedValue = GIT_STASH_APPLY_OPTIONS_INIT;
      this->raw = (git_stash_apply_options*) malloc(sizeof(git_stash_apply_options));
      memcpy(this->raw, &wrappedValue, sizeof(git_stash_apply_options));
  
  this->ConstructFields();
}

GitStashApplyOptions::GitStashApplyOptions(git_stash_apply_options* raw, bool selfFreeing, v8::Local<v8::Object> owner)
 : NodeGitWrapper<GitStashApplyOptionsTraits>(raw, selfFreeing, owner)
{
  this->ConstructFields();
}

GitStashApplyOptions::~GitStashApplyOptions() {
                this->checkout_options.Reset();
             if (this->progress_cb.HasCallback()) {
               this->raw->progress_payload = NULL;
           }
       }

void GitStashApplyOptions::ConstructFields() {
                v8::Local<Object> checkout_optionsTemp = Nan::To<v8::Object>(GitCheckoutOptions::New(
&this->raw->checkout_options,
            false
          )).ToLocalChecked();
          this->checkout_options.Reset(checkout_optionsTemp);

   
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->progress_cb = NULL;
             this->raw->progress_payload = (void *)this;
    
          v8::Local<Value> progress_payload = Nan::Undefined();
          this->progress_payload.Reset(progress_payload);
    }

void GitStashApplyOptions::InitializeComponent(v8::Local<v8::Object> target) {
  Nan::HandleScope scope;

  v8::Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(JSNewFunction);

  tpl->InstanceTemplate()->SetInternalFieldCount(1);
  tpl->SetClassName(Nan::New("StashApplyOptions").ToLocalChecked());

      Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("version").ToLocalChecked(), GetVersion, SetVersion);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("flags").ToLocalChecked(), GetFlags, SetFlags);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("checkoutOptions").ToLocalChecked(), GetCheckoutOptions, SetCheckoutOptions);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("progressCb").ToLocalChecked(), GetProgressCb, SetProgressCb);
     
  InitializeTemplate(tpl);

  v8::Local<Function> _constructor_template = Nan::GetFunction(tpl).ToLocalChecked();
  constructor_template.Reset(_constructor_template);
  Nan::Set(target, Nan::New("StashApplyOptions").ToLocalChecked(), _constructor_template);
}

    NAN_GETTER(GitStashApplyOptions::GetVersion) {

      GitStashApplyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitStashApplyOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->version));
     }

    NAN_SETTER(GitStashApplyOptions::SetVersion) {
      GitStashApplyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitStashApplyOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->version = (unsigned int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitStashApplyOptions::GetFlags) {

      GitStashApplyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitStashApplyOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->flags));
     }

    NAN_SETTER(GitStashApplyOptions::SetFlags) {
      GitStashApplyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitStashApplyOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->flags = (uint32_t) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitStashApplyOptions::GetCheckoutOptions) {

      GitStashApplyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitStashApplyOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->checkout_options));

     }

    NAN_SETTER(GitStashApplyOptions::SetCheckoutOptions) {
      GitStashApplyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitStashApplyOptions>(info.This());

        v8::Local<Object> checkout_options(Nan::To<v8::Object>(value).ToLocalChecked());

        wrapper->checkout_options.Reset(checkout_options);

        wrapper->raw->checkout_options = *  Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(Nan::To<v8::Object>(checkout_options).ToLocalChecked())->GetValue() ;

     }

      NAN_GETTER(GitStashApplyOptions::GetProgressCb) {

      GitStashApplyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitStashApplyOptions>(info.This());

        if (wrapper->progress_cb.HasCallback()) {
          info.GetReturnValue().Set(wrapper->progress_cb.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitStashApplyOptions::SetProgressCb) {
      GitStashApplyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitStashApplyOptions>(info.This());

        Nan::Callback *callback = NULL;
        int throttle = 100;
        bool waitForResult = true;

        if (value->IsFunction()) {
          callback = new Nan::Callback(value.As<Function>());
        } else if (value->IsObject()) {
          v8::Local<Object> object = value.As<Object>();
          v8::Local<String> callbackKey;
          Nan::MaybeLocal<Value> maybeObjectCallback = Nan::Get(object, Nan::New("callback").ToLocalChecked());
          if (!maybeObjectCallback.IsEmpty()) {
            v8::Local<Value> objectCallback = maybeObjectCallback.ToLocalChecked();
            if (objectCallback->IsFunction()) {
              callback = new Nan::Callback(objectCallback.As<Function>());

              Nan::MaybeLocal<Value> maybeObjectThrottle = Nan::Get(object, Nan::New("throttle").ToLocalChecked());
              if(!maybeObjectThrottle.IsEmpty()) {
                v8::Local<Value> objectThrottle = maybeObjectThrottle.ToLocalChecked();
                if (objectThrottle->IsNumber()) {
                  throttle = (int)objectThrottle.As<Number>()->Value();
                }
              }

              Nan::MaybeLocal<Value> maybeObjectWaitForResult = Nan::Get(object, Nan::New("waitForResult").ToLocalChecked());
              if(!maybeObjectWaitForResult.IsEmpty()) {
                Local<Value> objectWaitForResult = maybeObjectWaitForResult.ToLocalChecked();
                waitForResult = Nan::To<bool>(objectWaitForResult).FromJust();
              }
            }
          }
        }
        if (callback) {
          if (!wrapper->raw->progress_cb) {
            wrapper->raw->progress_cb = (git_stash_apply_progress_cb)progress_cb_cppCallback;
          }

          wrapper->progress_cb.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitStashApplyOptions* GitStashApplyOptions::progress_cb_getInstanceFromBaton(ProgressCbBaton* baton) {
           return static_cast<GitStashApplyOptions*>(baton->
               payload
  );
       }

      int GitStashApplyOptions::progress_cb_cppCallback (
          git_stash_apply_progress_t progress,           void * payload        ) {
        ProgressCbBaton *baton =
          new ProgressCbBaton(0);

          baton->progress = progress;
          baton->payload = payload;
 
        GitStashApplyOptions* instance = progress_cb_getInstanceFromBaton(baton);

           int result;

          if (instance->progress_cb.WillBeThrottled()) {
            result = baton->defaultResult;
            delete baton;
          } else if (instance->progress_cb.ShouldWaitForResult()) {
            result = baton->ExecuteAsync(progress_cb_async);
            delete baton;
          } else {
            result = baton->defaultResult;
            baton->ExecuteAsync(progress_cb_async, deleteBaton);
          }
          return result;
       }


      void GitStashApplyOptions::progress_cb_async(void *untypedBaton) {
        Nan::HandleScope scope;

        ProgressCbBaton* baton = static_cast<ProgressCbBaton*>(untypedBaton);
        GitStashApplyOptions* instance = progress_cb_getInstanceFromBaton(baton);

        if (instance->progress_cb.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

           v8::Local<Value> argv[1] = {
               Nan::New((int)baton->progress)
            };
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->progress_cb.GetCallback()), 1, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitStashApplyOptions::progress_cb_promiseCompleted)) {
          return;
        }

             if (result.IsEmpty() || result->IsNativeError()) {
              baton->result = -1;
            }
            else if (!result->IsNull() && !result->IsUndefined()) {
               if (result->IsNumber()) {
                baton->result = Nan::To<int>(result).FromJust();
              }
              else {
                baton->result = baton->defaultResult;
              }
             }
            else {
              baton->result = baton->defaultResult;
            }
           baton->Done();
       }

      void GitStashApplyOptions::progress_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
        Nan::HandleScope scope;

        ProgressCbBaton* baton = static_cast<ProgressCbBaton*>(_baton);
           if (isFulfilled) {
              if (result.IsEmpty() || result->IsNativeError()) {
                baton->result = -1;
              }
              else if (!result->IsNull() && !result->IsUndefined()) {
                 if (result->IsNumber()) {
                  baton->result = Nan::To<int>(result).FromJust();
                }
                else{
                  baton->result = baton->defaultResult;
                }
               }
              else {
                baton->result = baton->defaultResult;
              }
           }
          else {
            // promise was rejected
               GitStashApplyOptions* instance = static_cast<GitStashApplyOptions*>(baton-> payload  );
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitStashApplyOptions::GetProgressPayload) {

      GitStashApplyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitStashApplyOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->progress_payload));

     }

    NAN_SETTER(GitStashApplyOptions::SetProgressPayload) {
      GitStashApplyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitStashApplyOptions>(info.This());

        wrapper->progress_payload.Reset(value);

     }

   
// force base class template instantiation, to make sure we get all the
// methods, statics, etc.
template class NodeGitWrapper<GitStashApplyOptionsTraits>;
