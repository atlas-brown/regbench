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
#include "../include/checkout_options.h"
#include "nodegit_wrapper.cc"

  #include "../include/diff_file.h"
  #include "../include/strarray.h"
  #include "../include/tree.h"
  #include "../include/index.h"
  #include "../include/checkout_perfdata.h"
 
using namespace v8;
using namespace node;
using namespace std;


// generated from struct_content.cc
GitCheckoutOptions::GitCheckoutOptions() : NodeGitWrapper<GitCheckoutOptionsTraits>(NULL, true, v8::Local<v8::Object>())
{
        git_checkout_options wrappedValue = GIT_CHECKOUT_OPTIONS_INIT;
      this->raw = (git_checkout_options*) malloc(sizeof(git_checkout_options));
      memcpy(this->raw, &wrappedValue, sizeof(git_checkout_options));
  
  this->ConstructFields();
}

GitCheckoutOptions::GitCheckoutOptions(git_checkout_options* raw, bool selfFreeing, v8::Local<v8::Object> owner)
 : NodeGitWrapper<GitCheckoutOptionsTraits>(raw, selfFreeing, owner)
{
  this->ConstructFields();
}

GitCheckoutOptions::~GitCheckoutOptions() {
                               if (this->notify_cb.HasCallback()) {
               this->raw->notify_payload = NULL;
           }
                if (this->progress_cb.HasCallback()) {
               this->raw->progress_payload = NULL;
           }
                this->paths.Reset();
             this->baseline.Reset();
             this->baseline_index.Reset();
                         if (this->perfdata_cb.HasCallback()) {
               this->raw->perfdata_payload = NULL;
           }
       }

void GitCheckoutOptions::ConstructFields() {
                     
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->notify_cb = NULL;
             this->raw->notify_payload = (void *)this;
    
          v8::Local<Value> notify_payload = Nan::Undefined();
          this->notify_payload.Reset(notify_payload);
   
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->progress_cb = NULL;
             this->raw->progress_payload = (void *)this;
    
          v8::Local<Value> progress_payload = Nan::Undefined();
          this->progress_payload.Reset(progress_payload);
             v8::Local<Object> pathsTemp = Nan::To<v8::Object>(GitStrarray::New(
&this->raw->paths,
            false
          )).ToLocalChecked();
          this->paths.Reset(pathsTemp);

             v8::Local<Object> baselineTemp = Nan::To<v8::Object>(GitTree::New(
this->raw->baseline,
            false
          )).ToLocalChecked();
          this->baseline.Reset(baselineTemp);

             v8::Local<Object> baseline_indexTemp = Nan::To<v8::Object>(GitIndex::New(
this->raw->baseline_index,
            false
          )).ToLocalChecked();
          this->baseline_index.Reset(baseline_indexTemp);

               
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->perfdata_cb = NULL;
             this->raw->perfdata_payload = (void *)this;
    
          v8::Local<Value> perfdata_payload = Nan::Undefined();
          this->perfdata_payload.Reset(perfdata_payload);
    }

void GitCheckoutOptions::InitializeComponent(v8::Local<v8::Object> target) {
  Nan::HandleScope scope;

  v8::Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(JSNewFunction);

  tpl->InstanceTemplate()->SetInternalFieldCount(1);
  tpl->SetClassName(Nan::New("CheckoutOptions").ToLocalChecked());

      Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("version").ToLocalChecked(), GetVersion, SetVersion);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("checkoutStrategy").ToLocalChecked(), GetCheckoutStrategy, SetCheckoutStrategy);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("disableFilters").ToLocalChecked(), GetDisableFilters, SetDisableFilters);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("dirMode").ToLocalChecked(), GetDirMode, SetDirMode);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("fileMode").ToLocalChecked(), GetFileMode, SetFileMode);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("fileOpenFlags").ToLocalChecked(), GetFileOpenFlags, SetFileOpenFlags);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("notifyFlags").ToLocalChecked(), GetNotifyFlags, SetNotifyFlags);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("notifyCb").ToLocalChecked(), GetNotifyCb, SetNotifyCb);
          Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("progressCb").ToLocalChecked(), GetProgressCb, SetProgressCb);
          Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("paths").ToLocalChecked(), GetPaths, SetPaths);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("baseline").ToLocalChecked(), GetBaseline, SetBaseline);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("baselineIndex").ToLocalChecked(), GetBaselineIndex, SetBaselineIndex);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("targetDirectory").ToLocalChecked(), GetTargetDirectory, SetTargetDirectory);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("ancestorLabel").ToLocalChecked(), GetAncestorLabel, SetAncestorLabel);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("ourLabel").ToLocalChecked(), GetOurLabel, SetOurLabel);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("theirLabel").ToLocalChecked(), GetTheirLabel, SetTheirLabel);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("perfdataCb").ToLocalChecked(), GetPerfdataCb, SetPerfdataCb);
     
  InitializeTemplate(tpl);

  v8::Local<Function> _constructor_template = Nan::GetFunction(tpl).ToLocalChecked();
  constructor_template.Reset(_constructor_template);
  Nan::Set(target, Nan::New("CheckoutOptions").ToLocalChecked(), _constructor_template);
}

    NAN_GETTER(GitCheckoutOptions::GetVersion) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->version));
     }

    NAN_SETTER(GitCheckoutOptions::SetVersion) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->version = (unsigned int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitCheckoutOptions::GetCheckoutStrategy) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->checkout_strategy));
     }

    NAN_SETTER(GitCheckoutOptions::SetCheckoutStrategy) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->checkout_strategy = (unsigned int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitCheckoutOptions::GetDisableFilters) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->disable_filters));
     }

    NAN_SETTER(GitCheckoutOptions::SetDisableFilters) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->disable_filters = (int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitCheckoutOptions::GetDirMode) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->dir_mode));
     }

    NAN_SETTER(GitCheckoutOptions::SetDirMode) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->dir_mode = (unsigned int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitCheckoutOptions::GetFileMode) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->file_mode));
     }

    NAN_SETTER(GitCheckoutOptions::SetFileMode) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->file_mode = (unsigned int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitCheckoutOptions::GetFileOpenFlags) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->file_open_flags));
     }

    NAN_SETTER(GitCheckoutOptions::SetFileOpenFlags) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->file_open_flags = (int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitCheckoutOptions::GetNotifyFlags) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->notify_flags));
     }

    NAN_SETTER(GitCheckoutOptions::SetNotifyFlags) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->notify_flags = (unsigned int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitCheckoutOptions::GetNotifyCb) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        if (wrapper->notify_cb.HasCallback()) {
          info.GetReturnValue().Set(wrapper->notify_cb.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitCheckoutOptions::SetNotifyCb) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

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
            wrapper->raw->notify_cb = (git_checkout_notify_cb)notify_cb_cppCallback;
          }

          wrapper->notify_cb.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitCheckoutOptions* GitCheckoutOptions::notify_cb_getInstanceFromBaton(NotifyCbBaton* baton) {
           return static_cast<GitCheckoutOptions*>(baton->
                   payload
  );
       }

      int GitCheckoutOptions::notify_cb_cppCallback (
          git_checkout_notify_t why,           const char * path,           const git_diff_file * baseline,           const git_diff_file * target,           const git_diff_file * workdir,           void * payload        ) {
        NotifyCbBaton *baton =
          new NotifyCbBaton(1);

          baton->why = why;
          baton->path = path;
          baton->baseline = baseline;
          baton->target = target;
          baton->workdir = workdir;
          baton->payload = payload;
 
        GitCheckoutOptions* instance = notify_cb_getInstanceFromBaton(baton);

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


      void GitCheckoutOptions::notify_cb_async(void *untypedBaton) {
        Nan::HandleScope scope;

        NotifyCbBaton* baton = static_cast<NotifyCbBaton*>(untypedBaton);
        GitCheckoutOptions* instance = notify_cb_getInstanceFromBaton(baton);

        if (instance->notify_cb.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

           v8::Local<Value> argv[5] = {
               Nan::New((int)baton->why)
 ,               baton->path == NULL
                ? Nan::EmptyString()
                : Nan::New( baton->path).ToLocalChecked()
 ,               GitDiffFile::New(baton->baseline, false)
 ,               GitDiffFile::New(baton->target, false)
 ,               GitDiffFile::New(baton->workdir, false)
            };
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->notify_cb.GetCallback()), 5, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitCheckoutOptions::notify_cb_promiseCompleted)) {
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

      void GitCheckoutOptions::notify_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
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
               GitCheckoutOptions* instance = static_cast<GitCheckoutOptions*>(baton->     payload  );
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitCheckoutOptions::GetNotifyPayload) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->notify_payload));

     }

    NAN_SETTER(GitCheckoutOptions::SetNotifyPayload) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        wrapper->notify_payload.Reset(value);

     }

      NAN_GETTER(GitCheckoutOptions::GetProgressCb) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        if (wrapper->progress_cb.HasCallback()) {
          info.GetReturnValue().Set(wrapper->progress_cb.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitCheckoutOptions::SetProgressCb) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

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
            wrapper->raw->progress_cb = (git_checkout_progress_cb)progress_cb_cppCallback;
          }

          wrapper->progress_cb.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitCheckoutOptions* GitCheckoutOptions::progress_cb_getInstanceFromBaton(ProgressCbBaton* baton) {
           return static_cast<GitCheckoutOptions*>(baton->
                 payload
  );
       }

      int GitCheckoutOptions::progress_cb_cppCallback (
          const char * path,           size_t completed_steps,           size_t total_steps,           void * payload        ) {
        ProgressCbBaton *baton =
          new ProgressCbBaton(1);

          baton->path = path;
          baton->completed_steps = completed_steps;
          baton->total_steps = total_steps;
          baton->payload = payload;
 
        GitCheckoutOptions* instance = progress_cb_getInstanceFromBaton(baton);

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


      void GitCheckoutOptions::progress_cb_async(void *untypedBaton) {
        Nan::HandleScope scope;

        ProgressCbBaton* baton = static_cast<ProgressCbBaton*>(untypedBaton);
        GitCheckoutOptions* instance = progress_cb_getInstanceFromBaton(baton);

        if (instance->progress_cb.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

           v8::Local<Value> argv[3] = {
               baton->path == NULL
                ? Nan::EmptyString()
                : Nan::New( baton->path).ToLocalChecked()
 ,               // HACK: NAN should really have an overload for Nan::New to support size_t
              Nan::New((unsigned int)baton->completed_steps)
 ,               // HACK: NAN should really have an overload for Nan::New to support size_t
              Nan::New((unsigned int)baton->total_steps)
            };
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->progress_cb.GetCallback()), 3, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitCheckoutOptions::progress_cb_promiseCompleted)) {
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

      void GitCheckoutOptions::progress_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
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
               GitCheckoutOptions* instance = static_cast<GitCheckoutOptions*>(baton->   payload  );
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitCheckoutOptions::GetProgressPayload) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->progress_payload));

     }

    NAN_SETTER(GitCheckoutOptions::SetProgressPayload) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        wrapper->progress_payload.Reset(value);

     }

      NAN_GETTER(GitCheckoutOptions::GetPaths) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->paths));

     }

    NAN_SETTER(GitCheckoutOptions::SetPaths) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        v8::Local<Object> paths(Nan::To<v8::Object>(value).ToLocalChecked());

        wrapper->paths.Reset(paths);

        wrapper->raw->paths = * StrArrayConverter::Convert(Nan::To<v8::Object>(paths).ToLocalChecked()) ;

     }

      NAN_GETTER(GitCheckoutOptions::GetBaseline) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->baseline));

     }

    NAN_SETTER(GitCheckoutOptions::SetBaseline) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        v8::Local<Object> baseline(Nan::To<v8::Object>(value).ToLocalChecked());

        wrapper->baseline.Reset(baseline);

        wrapper->raw->baseline =   Nan::ObjectWrap::Unwrap<GitTree>(Nan::To<v8::Object>(baseline).ToLocalChecked())->GetValue() ;

     }

      NAN_GETTER(GitCheckoutOptions::GetBaselineIndex) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->baseline_index));

     }

    NAN_SETTER(GitCheckoutOptions::SetBaselineIndex) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        v8::Local<Object> baseline_index(Nan::To<v8::Object>(value).ToLocalChecked());

        wrapper->baseline_index.Reset(baseline_index);

        wrapper->raw->baseline_index =   Nan::ObjectWrap::Unwrap<GitIndex>(Nan::To<v8::Object>(baseline_index).ToLocalChecked())->GetValue() ;

     }

      NAN_GETTER(GitCheckoutOptions::GetTargetDirectory) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        if (wrapper->GetValue()->target_directory) {
          info.GetReturnValue().Set(Nan::New<String>(wrapper->GetValue()->target_directory).ToLocalChecked());
        }
        else {
          return;
        }

     }

    NAN_SETTER(GitCheckoutOptions::SetTargetDirectory) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        if (wrapper->GetValue()->target_directory) {
        }

        Nan::Utf8String str(value);
        wrapper->GetValue()->target_directory = strdup(*str);

     }

      NAN_GETTER(GitCheckoutOptions::GetAncestorLabel) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        if (wrapper->GetValue()->ancestor_label) {
          info.GetReturnValue().Set(Nan::New<String>(wrapper->GetValue()->ancestor_label).ToLocalChecked());
        }
        else {
          return;
        }

     }

    NAN_SETTER(GitCheckoutOptions::SetAncestorLabel) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        if (wrapper->GetValue()->ancestor_label) {
        }

        Nan::Utf8String str(value);
        wrapper->GetValue()->ancestor_label = strdup(*str);

     }

      NAN_GETTER(GitCheckoutOptions::GetOurLabel) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        if (wrapper->GetValue()->our_label) {
          info.GetReturnValue().Set(Nan::New<String>(wrapper->GetValue()->our_label).ToLocalChecked());
        }
        else {
          return;
        }

     }

    NAN_SETTER(GitCheckoutOptions::SetOurLabel) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        if (wrapper->GetValue()->our_label) {
        }

        Nan::Utf8String str(value);
        wrapper->GetValue()->our_label = strdup(*str);

     }

      NAN_GETTER(GitCheckoutOptions::GetTheirLabel) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        if (wrapper->GetValue()->their_label) {
          info.GetReturnValue().Set(Nan::New<String>(wrapper->GetValue()->their_label).ToLocalChecked());
        }
        else {
          return;
        }

     }

    NAN_SETTER(GitCheckoutOptions::SetTheirLabel) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        if (wrapper->GetValue()->their_label) {
        }

        Nan::Utf8String str(value);
        wrapper->GetValue()->their_label = strdup(*str);

     }

      NAN_GETTER(GitCheckoutOptions::GetPerfdataCb) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        if (wrapper->perfdata_cb.HasCallback()) {
          info.GetReturnValue().Set(wrapper->perfdata_cb.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitCheckoutOptions::SetPerfdataCb) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

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
          if (!wrapper->raw->perfdata_cb) {
            wrapper->raw->perfdata_cb = (git_checkout_perfdata_cb)perfdata_cb_cppCallback;
          }

          wrapper->perfdata_cb.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitCheckoutOptions* GitCheckoutOptions::perfdata_cb_getInstanceFromBaton(PerfdataCbBaton* baton) {
           return static_cast<GitCheckoutOptions*>(baton->
               payload
  );
       }

      int GitCheckoutOptions::perfdata_cb_cppCallback (
          const git_checkout_perfdata * perfdata,           void * payload        ) {
        PerfdataCbBaton *baton =
          new PerfdataCbBaton(1);

          baton->perfdata = perfdata;
          baton->payload = payload;
 
        GitCheckoutOptions* instance = perfdata_cb_getInstanceFromBaton(baton);

           int result;

          if (instance->perfdata_cb.WillBeThrottled()) {
            result = baton->defaultResult;
            delete baton;
          } else if (instance->perfdata_cb.ShouldWaitForResult()) {
            result = baton->ExecuteAsync(perfdata_cb_async);
            delete baton;
          } else {
            result = baton->defaultResult;
            baton->ExecuteAsync(perfdata_cb_async, deleteBaton);
          }
          return result;
       }


      void GitCheckoutOptions::perfdata_cb_async(void *untypedBaton) {
        Nan::HandleScope scope;

        PerfdataCbBaton* baton = static_cast<PerfdataCbBaton*>(untypedBaton);
        GitCheckoutOptions* instance = perfdata_cb_getInstanceFromBaton(baton);

        if (instance->perfdata_cb.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

           v8::Local<Value> argv[1] = {
               GitCheckoutPerfdata::New(baton->perfdata, false)
            };
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->perfdata_cb.GetCallback()), 1, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitCheckoutOptions::perfdata_cb_promiseCompleted)) {
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

      void GitCheckoutOptions::perfdata_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
        Nan::HandleScope scope;

        PerfdataCbBaton* baton = static_cast<PerfdataCbBaton*>(_baton);
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
               GitCheckoutOptions* instance = static_cast<GitCheckoutOptions*>(baton-> payload  );
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitCheckoutOptions::GetPerfdataPayload) {

      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->perfdata_payload));

     }

    NAN_SETTER(GitCheckoutOptions::SetPerfdataPayload) {
      GitCheckoutOptions *wrapper = Nan::ObjectWrap::Unwrap<GitCheckoutOptions>(info.This());

        wrapper->perfdata_payload.Reset(value);

     }

   
// force base class template instantiation, to make sure we get all the
// methods, statics, etc.
template class NodeGitWrapper<GitCheckoutOptionsTraits>;
