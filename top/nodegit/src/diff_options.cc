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
#include "../include/diff_options.h"
#include "nodegit_wrapper.cc"

  #include "../include/strarray.h"
  #include "../include/diff_delta.h"
 
using namespace v8;
using namespace node;
using namespace std;


// generated from struct_content.cc
GitDiffOptions::GitDiffOptions() : NodeGitWrapper<GitDiffOptionsTraits>(NULL, true, v8::Local<v8::Object>())
{
        git_diff_options wrappedValue = GIT_DIFF_OPTIONS_INIT;
      this->raw = (git_diff_options*) malloc(sizeof(git_diff_options));
      memcpy(this->raw, &wrappedValue, sizeof(git_diff_options));
  
  this->ConstructFields();
}

GitDiffOptions::GitDiffOptions(git_diff_options* raw, bool selfFreeing, v8::Local<v8::Object> owner)
 : NodeGitWrapper<GitDiffOptionsTraits>(raw, selfFreeing, owner)
{
  this->ConstructFields();
}

GitDiffOptions::~GitDiffOptions() {
                  this->pathspec.Reset();
             if (this->notify_cb.HasCallback()) {
               this->raw->payload = NULL;
           }
             if (this->progress_cb.HasCallback()) {
               this->raw->payload = NULL;
           }
                        }

void GitDiffOptions::ConstructFields() {
                  v8::Local<Object> pathspecTemp = Nan::To<v8::Object>(GitStrarray::New(
&this->raw->pathspec,
            false
          )).ToLocalChecked();
          this->pathspec.Reset(pathspecTemp);

   
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->notify_cb = NULL;
             this->raw->payload = (void *)this;
    
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->progress_cb = NULL;
             this->raw->payload = (void *)this;
    
          v8::Local<Value> payload = Nan::Undefined();
          this->payload.Reset(payload);
                     }

void GitDiffOptions::InitializeComponent(v8::Local<v8::Object> target) {
  Nan::HandleScope scope;

  v8::Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(JSNewFunction);

  tpl->InstanceTemplate()->SetInternalFieldCount(1);
  tpl->SetClassName(Nan::New("DiffOptions").ToLocalChecked());

      Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("version").ToLocalChecked(), GetVersion, SetVersion);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("flags").ToLocalChecked(), GetFlags, SetFlags);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("ignoreSubmodules").ToLocalChecked(), GetIgnoreSubmodules, SetIgnoreSubmodules);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("pathspec").ToLocalChecked(), GetPathspec, SetPathspec);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("notifyCb").ToLocalChecked(), GetNotifyCb, SetNotifyCb);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("progressCb").ToLocalChecked(), GetProgressCb, SetProgressCb);
          Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("contextLines").ToLocalChecked(), GetContextLines, SetContextLines);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("interhunkLines").ToLocalChecked(), GetInterhunkLines, SetInterhunkLines);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("idAbbrev").ToLocalChecked(), GetIdAbbrev, SetIdAbbrev);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("maxSize").ToLocalChecked(), GetMaxSize, SetMaxSize);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("oldPrefix").ToLocalChecked(), GetOldPrefix, SetOldPrefix);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("newPrefix").ToLocalChecked(), GetNewPrefix, SetNewPrefix);
   
  InitializeTemplate(tpl);

  v8::Local<Function> _constructor_template = Nan::GetFunction(tpl).ToLocalChecked();
  constructor_template.Reset(_constructor_template);
  Nan::Set(target, Nan::New("DiffOptions").ToLocalChecked(), _constructor_template);
}

    NAN_GETTER(GitDiffOptions::GetVersion) {

      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->version));
     }

    NAN_SETTER(GitDiffOptions::SetVersion) {
      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->version = (unsigned int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitDiffOptions::GetFlags) {

      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->flags));
     }

    NAN_SETTER(GitDiffOptions::SetFlags) {
      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->flags = (uint32_t) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitDiffOptions::GetIgnoreSubmodules) {

      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        info.GetReturnValue().Set(Nan::New((int)wrapper->GetValue()->ignore_submodules));

     }

    NAN_SETTER(GitDiffOptions::SetIgnoreSubmodules) {
      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        if (value->IsNumber()) {
          wrapper->GetValue()->ignore_submodules = (git_submodule_ignore_t) Nan::To<int32_t>(value).FromJust();
        }

     }

      NAN_GETTER(GitDiffOptions::GetPathspec) {

      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->pathspec));

     }

    NAN_SETTER(GitDiffOptions::SetPathspec) {
      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        v8::Local<Object> pathspec(Nan::To<v8::Object>(value).ToLocalChecked());

        wrapper->pathspec.Reset(pathspec);

        wrapper->raw->pathspec = * StrArrayConverter::Convert(Nan::To<v8::Object>(pathspec).ToLocalChecked()) ;

     }

      NAN_GETTER(GitDiffOptions::GetNotifyCb) {

      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        if (wrapper->notify_cb.HasCallback()) {
          info.GetReturnValue().Set(wrapper->notify_cb.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitDiffOptions::SetNotifyCb) {
      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        Nan::Callback *callback = NULL;
        int throttle = 0;
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
          if (!wrapper->raw->notify_cb) {
            wrapper->raw->notify_cb = (git_diff_notify_cb)notify_cb_cppCallback;
          }

          wrapper->notify_cb.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitDiffOptions* GitDiffOptions::notify_cb_getInstanceFromBaton(NotifyCbBaton* baton) {
           return static_cast<GitDiffOptions*>(baton->
                 payload
  );
       }

      int GitDiffOptions::notify_cb_cppCallback (
          const git_diff * diff_so_far,           git_diff_delta * delta_to_add,           const char * matched_pathspec,           void * payload        ) {
        NotifyCbBaton *baton =
          new NotifyCbBaton(1);

          baton->diff_so_far = diff_so_far;
          baton->delta_to_add = delta_to_add;
          baton->matched_pathspec = matched_pathspec;
          baton->payload = payload;
 
        GitDiffOptions* instance = notify_cb_getInstanceFromBaton(baton);

           int result;

          if (instance->notify_cb.WillBeThrottled()) {
            result = baton->defaultResult;
            delete baton;
          } else if (instance->notify_cb.ShouldWaitForResult()) {
            result = baton->ExecuteAsync(notify_cb_async);
            delete baton;
          } else {
            result = baton->defaultResult;
            baton->ExecuteAsync(notify_cb_async, deleteBaton);
          }
          return result;
       }


      void GitDiffOptions::notify_cb_async(void *untypedBaton) {
        Nan::HandleScope scope;

        NotifyCbBaton* baton = static_cast<NotifyCbBaton*>(untypedBaton);
        GitDiffOptions* instance = notify_cb_getInstanceFromBaton(baton);

        if (instance->notify_cb.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

           v8::Local<Value> argv[2] = {
               GitDiffDelta::New(baton->delta_to_add, false)
 ,               baton->matched_pathspec == NULL
                ? Nan::EmptyString()
                : Nan::New( baton->matched_pathspec).ToLocalChecked()
            };
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->notify_cb.GetCallback()), 2, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitDiffOptions::notify_cb_promiseCompleted)) {
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

      void GitDiffOptions::notify_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
        Nan::HandleScope scope;

        NotifyCbBaton* baton = static_cast<NotifyCbBaton*>(_baton);
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
               GitDiffOptions* instance = static_cast<GitDiffOptions*>(baton->   payload  );
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitDiffOptions::GetProgressCb) {

      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        if (wrapper->progress_cb.HasCallback()) {
          info.GetReturnValue().Set(wrapper->progress_cb.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitDiffOptions::SetProgressCb) {
      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        Nan::Callback *callback = NULL;
        int throttle = 0;
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
            wrapper->raw->progress_cb = (git_diff_progress_cb)progress_cb_cppCallback;
          }

          wrapper->progress_cb.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitDiffOptions* GitDiffOptions::progress_cb_getInstanceFromBaton(ProgressCbBaton* baton) {
           return static_cast<GitDiffOptions*>(baton->
                 payload
  );
       }

      int GitDiffOptions::progress_cb_cppCallback (
          const git_diff * diff_so_far,           const char * old_path,           const char * new_path,           void * payload        ) {
        ProgressCbBaton *baton =
          new ProgressCbBaton(1);

          baton->diff_so_far = diff_so_far;
          baton->old_path = old_path;
          baton->new_path = new_path;
          baton->payload = payload;
 
        GitDiffOptions* instance = progress_cb_getInstanceFromBaton(baton);

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


      void GitDiffOptions::progress_cb_async(void *untypedBaton) {
        Nan::HandleScope scope;

        ProgressCbBaton* baton = static_cast<ProgressCbBaton*>(untypedBaton);
        GitDiffOptions* instance = progress_cb_getInstanceFromBaton(baton);

        if (instance->progress_cb.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

           v8::Local<Value> argv[2] = {
               baton->old_path == NULL
                ? Nan::EmptyString()
                : Nan::New( baton->old_path).ToLocalChecked()
 ,               baton->new_path == NULL
                ? Nan::EmptyString()
                : Nan::New( baton->new_path).ToLocalChecked()
            };
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->progress_cb.GetCallback()), 2, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitDiffOptions::progress_cb_promiseCompleted)) {
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

      void GitDiffOptions::progress_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
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
               GitDiffOptions* instance = static_cast<GitDiffOptions*>(baton->   payload  );
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitDiffOptions::GetPayload) {

      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->payload));

     }

    NAN_SETTER(GitDiffOptions::SetPayload) {
      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        wrapper->payload.Reset(value);

     }

      NAN_GETTER(GitDiffOptions::GetContextLines) {

      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->context_lines));
     }

    NAN_SETTER(GitDiffOptions::SetContextLines) {
      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->context_lines = (uint32_t) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitDiffOptions::GetInterhunkLines) {

      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->interhunk_lines));
     }

    NAN_SETTER(GitDiffOptions::SetInterhunkLines) {
      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->interhunk_lines = (uint32_t) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitDiffOptions::GetIdAbbrev) {

      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->id_abbrev));
     }

    NAN_SETTER(GitDiffOptions::SetIdAbbrev) {
      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->id_abbrev = (uint16_t) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitDiffOptions::GetMaxSize) {

      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        info.GetReturnValue().Set(Nan::New((int)wrapper->GetValue()->max_size));

     }

    NAN_SETTER(GitDiffOptions::SetMaxSize) {
      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        if (value->IsNumber()) {
          wrapper->GetValue()->max_size = (git_off_t) Nan::To<int32_t>(value).FromJust();
        }

     }

      NAN_GETTER(GitDiffOptions::GetOldPrefix) {

      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        if (wrapper->GetValue()->old_prefix) {
          info.GetReturnValue().Set(Nan::New<String>(wrapper->GetValue()->old_prefix).ToLocalChecked());
        }
        else {
          return;
        }

     }

    NAN_SETTER(GitDiffOptions::SetOldPrefix) {
      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        if (wrapper->GetValue()->old_prefix) {
        }

        Nan::Utf8String str(value);
        wrapper->GetValue()->old_prefix = strdup(*str);

     }

      NAN_GETTER(GitDiffOptions::GetNewPrefix) {

      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        if (wrapper->GetValue()->new_prefix) {
          info.GetReturnValue().Set(Nan::New<String>(wrapper->GetValue()->new_prefix).ToLocalChecked());
        }
        else {
          return;
        }

     }

    NAN_SETTER(GitDiffOptions::SetNewPrefix) {
      GitDiffOptions *wrapper = Nan::ObjectWrap::Unwrap<GitDiffOptions>(info.This());

        if (wrapper->GetValue()->new_prefix) {
        }

        Nan::Utf8String str(value);
        wrapper->GetValue()->new_prefix = strdup(*str);

     }

   
// force base class template instantiation, to make sure we get all the
// methods, statics, etc.
template class NodeGitWrapper<GitDiffOptionsTraits>;
