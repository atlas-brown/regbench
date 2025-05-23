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
    #include <git2/sys/filter.h>
 }

#include <iostream>
#include "../include/nodegit.h"
#include "../include/lock_master.h"
#include "../include/functions/copy.h"
#include "../include/filter.h"
#include "nodegit_wrapper.cc"

  #include "../include/filter_source.h"
  #include "../include/buf.h"
 
using namespace v8;
using namespace node;
using namespace std;


// generated from struct_content.cc
GitFilter::GitFilter() : NodeGitWrapper<GitFilterTraits>(NULL, true, v8::Local<v8::Object>())
{
       git_filter_extended wrappedValue = GIT_FILTER_INIT;
      this->raw = (git_filter*) malloc(sizeof(git_filter_extended));
      memcpy(this->raw, &wrappedValue, sizeof(git_filter_extended));
  
  this->ConstructFields();
}

GitFilter::GitFilter(git_filter* raw, bool selfFreeing, v8::Local<v8::Object> owner)
 : NodeGitWrapper<GitFilterTraits>(raw, selfFreeing, owner)
{
  this->ConstructFields();
}

GitFilter::~GitFilter() {
                if (this->initialize.HasCallback()) {
              ((git_filter_extended *)this->raw)->payload = NULL;
           }
             if (this->shutdown.HasCallback()) {
              ((git_filter_extended *)this->raw)->payload = NULL;
           }
             if (this->check.HasCallback()) {
              ((git_filter_extended *)this->raw)->payload = NULL;
           }
             if (this->apply.HasCallback()) {
              ((git_filter_extended *)this->raw)->payload = NULL;
           }
             if (this->cleanup.HasCallback()) {
              ((git_filter_extended *)this->raw)->payload = NULL;
           }
    }

void GitFilter::ConstructFields() {
      
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->initialize = NULL;
            ((git_filter_extended *)this->raw)->payload = (void *)this;
    
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->shutdown = NULL;
            ((git_filter_extended *)this->raw)->payload = (void *)this;
    
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->check = NULL;
            ((git_filter_extended *)this->raw)->payload = (void *)this;
    
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->apply = NULL;
            ((git_filter_extended *)this->raw)->payload = (void *)this;
    
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->cleanup = NULL;
            ((git_filter_extended *)this->raw)->payload = (void *)this;
     }

void GitFilter::InitializeComponent(v8::Local<v8::Object> target) {
  Nan::HandleScope scope;

  v8::Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(JSNewFunction);

  tpl->InstanceTemplate()->SetInternalFieldCount(1);
  tpl->SetClassName(Nan::New("Filter").ToLocalChecked());

      Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("version").ToLocalChecked(), GetVersion, SetVersion);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("attributes").ToLocalChecked(), GetAttributes, SetAttributes);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("initialize").ToLocalChecked(), GetInitialize, SetInitialize);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("shutdown").ToLocalChecked(), GetShutdown, SetShutdown);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("check").ToLocalChecked(), GetCheck, SetCheck);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("apply").ToLocalChecked(), GetApply, SetApply);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("cleanup").ToLocalChecked(), GetCleanup, SetCleanup);
   
  InitializeTemplate(tpl);

  v8::Local<Function> _constructor_template = Nan::GetFunction(tpl).ToLocalChecked();
  constructor_template.Reset(_constructor_template);
  Nan::Set(target, Nan::New("Filter").ToLocalChecked(), _constructor_template);
}

    NAN_GETTER(GitFilter::GetVersion) {

      GitFilter *wrapper = Nan::ObjectWrap::Unwrap<GitFilter>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->version));
     }

    NAN_SETTER(GitFilter::SetVersion) {
      GitFilter *wrapper = Nan::ObjectWrap::Unwrap<GitFilter>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->version = (unsigned int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitFilter::GetAttributes) {

      GitFilter *wrapper = Nan::ObjectWrap::Unwrap<GitFilter>(info.This());

        if (wrapper->GetValue()->attributes) {
          info.GetReturnValue().Set(Nan::New<String>(wrapper->GetValue()->attributes).ToLocalChecked());
        }
        else {
          return;
        }

     }

    NAN_SETTER(GitFilter::SetAttributes) {
      GitFilter *wrapper = Nan::ObjectWrap::Unwrap<GitFilter>(info.This());

        if (wrapper->GetValue()->attributes) {
        }

        Nan::Utf8String str(value);
        wrapper->GetValue()->attributes = strdup(*str);

     }

      NAN_GETTER(GitFilter::GetInitialize) {

      GitFilter *wrapper = Nan::ObjectWrap::Unwrap<GitFilter>(info.This());

        if (wrapper->initialize.HasCallback()) {
          info.GetReturnValue().Set(wrapper->initialize.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitFilter::SetInitialize) {
      GitFilter *wrapper = Nan::ObjectWrap::Unwrap<GitFilter>(info.This());

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
          if (!wrapper->raw->initialize) {
            wrapper->raw->initialize = (git_filter_init_fn)initialize_cppCallback;
          }

          wrapper->initialize.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitFilter* GitFilter::initialize_getInstanceFromBaton(InitializeBaton* baton) {
          return static_cast<GitFilter*>(((git_filter_extended *)baton->self)->payload);
       }

      int GitFilter::initialize_cppCallback (
          git_filter * self        ) {
        InitializeBaton *baton =
          new InitializeBaton(0);

          baton->self = self;
 
        GitFilter* instance = initialize_getInstanceFromBaton(baton);

           int result;

          if (instance->initialize.WillBeThrottled()) {
            result = baton->defaultResult;
            delete baton;
          } else if (instance->initialize.ShouldWaitForResult()) {
            result = baton->ExecuteAsync(initialize_async);
            delete baton;
          } else {
            result = baton->defaultResult;
            baton->ExecuteAsync(initialize_async, deleteBaton);
          }
          return result;
       }


      void GitFilter::initialize_async(void *untypedBaton) {
        Nan::HandleScope scope;

        InitializeBaton* baton = static_cast<InitializeBaton*>(untypedBaton);
        GitFilter* instance = initialize_getInstanceFromBaton(baton);

        if (instance->initialize.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

          v8::Local<Value> *argv = NULL;
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->initialize.GetCallback()), 0, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitFilter::initialize_promiseCompleted)) {
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

      void GitFilter::initialize_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
        Nan::HandleScope scope;

        InitializeBaton* baton = static_cast<InitializeBaton*>(_baton);
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
              GitFilter* instance = static_cast<GitFilter*>(((git_filter_extended *)baton->self)->payload);
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitFilter::GetShutdown) {

      GitFilter *wrapper = Nan::ObjectWrap::Unwrap<GitFilter>(info.This());

        if (wrapper->shutdown.HasCallback()) {
          info.GetReturnValue().Set(wrapper->shutdown.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitFilter::SetShutdown) {
      GitFilter *wrapper = Nan::ObjectWrap::Unwrap<GitFilter>(info.This());

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
          if (!wrapper->raw->shutdown) {
            wrapper->raw->shutdown = (git_filter_shutdown_fn)shutdown_cppCallback;
          }

          wrapper->shutdown.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitFilter* GitFilter::shutdown_getInstanceFromBaton(ShutdownBaton* baton) {
          return static_cast<GitFilter*>(((git_filter_extended *)baton->self)->payload);
       }

      void GitFilter::shutdown_cppCallback (
          git_filter * self        ) {
        ShutdownBaton *baton =
          new ShutdownBaton();

          baton->self = self;
 
        GitFilter* instance = shutdown_getInstanceFromBaton(baton);

          if (instance->shutdown.WillBeThrottled()) {
            delete baton;
          } else if (instance->shutdown.ShouldWaitForResult()) {
            baton->ExecuteAsync(shutdown_async);
            delete baton;
          } else {
            baton->ExecuteAsync(shutdown_async, deleteBaton);
          }
          return;
       }


      void GitFilter::shutdown_async(void *untypedBaton) {
        Nan::HandleScope scope;

        ShutdownBaton* baton = static_cast<ShutdownBaton*>(untypedBaton);
        GitFilter* instance = shutdown_getInstanceFromBaton(baton);

        if (instance->shutdown.GetCallback()->IsEmpty()) {
           baton->Done();
          return;
        }

          v8::Local<Value> *argv = NULL;
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->shutdown.GetCallback()), 0, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitFilter::shutdown_promiseCompleted)) {
          return;
        }

          baton->Done();
       }

      void GitFilter::shutdown_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
        Nan::HandleScope scope;

        ShutdownBaton* baton = static_cast<ShutdownBaton*>(_baton);
          baton->Done();
       }
      NAN_GETTER(GitFilter::GetCheck) {

      GitFilter *wrapper = Nan::ObjectWrap::Unwrap<GitFilter>(info.This());

        if (wrapper->check.HasCallback()) {
          info.GetReturnValue().Set(wrapper->check.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitFilter::SetCheck) {
      GitFilter *wrapper = Nan::ObjectWrap::Unwrap<GitFilter>(info.This());

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
          if (!wrapper->raw->check) {
            wrapper->raw->check = (git_filter_check_fn)check_cppCallback;
          }

          wrapper->check.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitFilter* GitFilter::check_getInstanceFromBaton(CheckBaton* baton) {
          return static_cast<GitFilter*>(((git_filter_extended *)baton->self)->payload);
       }

      int GitFilter::check_cppCallback (
          git_filter * self,           void ** payload,           const git_filter_source * src,           const char ** attr_values        ) {
        CheckBaton *baton =
          new CheckBaton(-30);

          baton->self = self;
          baton->payload = payload;
          baton->src = src;
          baton->attr_values = attr_values;
 
        GitFilter* instance = check_getInstanceFromBaton(baton);

           int result;

          if (instance->check.WillBeThrottled()) {
            result = baton->defaultResult;
            delete baton;
          } else if (instance->check.ShouldWaitForResult()) {
            result = baton->ExecuteAsync(check_async);
            delete baton;
          } else {
            result = baton->defaultResult;
            baton->ExecuteAsync(check_async, deleteBaton);
          }
          return result;
       }


      void GitFilter::check_async(void *untypedBaton) {
        Nan::HandleScope scope;

        CheckBaton* baton = static_cast<CheckBaton*>(untypedBaton);
        GitFilter* instance = check_getInstanceFromBaton(baton);

        if (instance->check.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

           v8::Local<Value> argv[2] = {
               GitFilterSource::New(baton->src, false)
 ,               baton->attr_values == NULL
                ? Nan::EmptyString()
                : Nan::New(* baton->attr_values).ToLocalChecked()
            };
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->check.GetCallback()), 2, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitFilter::check_promiseCompleted)) {
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

      void GitFilter::check_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
        Nan::HandleScope scope;

        CheckBaton* baton = static_cast<CheckBaton*>(_baton);
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
              GitFilter* instance = static_cast<GitFilter*>(((git_filter_extended *)baton->self)->payload);
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitFilter::GetApply) {

      GitFilter *wrapper = Nan::ObjectWrap::Unwrap<GitFilter>(info.This());

        if (wrapper->apply.HasCallback()) {
          info.GetReturnValue().Set(wrapper->apply.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitFilter::SetApply) {
      GitFilter *wrapper = Nan::ObjectWrap::Unwrap<GitFilter>(info.This());

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
          if (!wrapper->raw->apply) {
            wrapper->raw->apply = (git_filter_apply_fn)apply_cppCallback;
          }

          wrapper->apply.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitFilter* GitFilter::apply_getInstanceFromBaton(ApplyBaton* baton) {
          return static_cast<GitFilter*>(((git_filter_extended *)baton->self)->payload);
       }

      int GitFilter::apply_cppCallback (
          git_filter * self,           void ** payload,           git_buf * to,           const git_buf * from,           const git_filter_source * src        ) {
        ApplyBaton *baton =
          new ApplyBaton(-30);

          baton->self = self;
          baton->payload = payload;
          baton->to = to;
          baton->from = from;
          baton->src = src;
 
        GitFilter* instance = apply_getInstanceFromBaton(baton);

           int result;

          if (instance->apply.WillBeThrottled()) {
            result = baton->defaultResult;
            delete baton;
          } else if (instance->apply.ShouldWaitForResult()) {
            result = baton->ExecuteAsync(apply_async);
            delete baton;
          } else {
            result = baton->defaultResult;
            baton->ExecuteAsync(apply_async, deleteBaton);
          }
          return result;
       }


      void GitFilter::apply_async(void *untypedBaton) {
        Nan::HandleScope scope;

        ApplyBaton* baton = static_cast<ApplyBaton*>(untypedBaton);
        GitFilter* instance = apply_getInstanceFromBaton(baton);

        if (instance->apply.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

           v8::Local<Value> argv[3] = {
               GitBuf::New(baton->to, false)
 ,               GitBuf::New(baton->from, false)
 ,               GitFilterSource::New(baton->src, false)
            };
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->apply.GetCallback()), 3, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitFilter::apply_promiseCompleted)) {
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

      void GitFilter::apply_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
        Nan::HandleScope scope;

        ApplyBaton* baton = static_cast<ApplyBaton*>(_baton);
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
              GitFilter* instance = static_cast<GitFilter*>(((git_filter_extended *)baton->self)->payload);
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitFilter::GetCleanup) {

      GitFilter *wrapper = Nan::ObjectWrap::Unwrap<GitFilter>(info.This());

        if (wrapper->cleanup.HasCallback()) {
          info.GetReturnValue().Set(wrapper->cleanup.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitFilter::SetCleanup) {
      GitFilter *wrapper = Nan::ObjectWrap::Unwrap<GitFilter>(info.This());

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
          if (!wrapper->raw->cleanup) {
            wrapper->raw->cleanup = (git_filter_cleanup_fn)cleanup_cppCallback;
          }

          wrapper->cleanup.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitFilter* GitFilter::cleanup_getInstanceFromBaton(CleanupBaton* baton) {
          return static_cast<GitFilter*>(((git_filter_extended *)baton->self)->payload);
       }

      void GitFilter::cleanup_cppCallback (
          git_filter * self,           void * payload        ) {
        CleanupBaton *baton =
          new CleanupBaton();

          baton->self = self;
          baton->payload = payload;
 
        GitFilter* instance = cleanup_getInstanceFromBaton(baton);

          if (instance->cleanup.WillBeThrottled()) {
            delete baton;
          } else if (instance->cleanup.ShouldWaitForResult()) {
            baton->ExecuteAsync(cleanup_async);
            delete baton;
          } else {
            baton->ExecuteAsync(cleanup_async, deleteBaton);
          }
          return;
       }


      void GitFilter::cleanup_async(void *untypedBaton) {
        Nan::HandleScope scope;

        CleanupBaton* baton = static_cast<CleanupBaton*>(untypedBaton);
        GitFilter* instance = cleanup_getInstanceFromBaton(baton);

        if (instance->cleanup.GetCallback()->IsEmpty()) {
           baton->Done();
          return;
        }

          v8::Local<Value> *argv = NULL;
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->cleanup.GetCallback()), 0, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitFilter::cleanup_promiseCompleted)) {
          return;
        }

          baton->Done();
       }

      void GitFilter::cleanup_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
        Nan::HandleScope scope;

        CleanupBaton* baton = static_cast<CleanupBaton*>(_baton);
          baton->Done();
       }
   
// force base class template instantiation, to make sure we get all the
// methods, statics, etc.
template class NodeGitWrapper<GitFilterTraits>;
