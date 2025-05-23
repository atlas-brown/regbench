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
#include "../include/remote_callbacks.h"
#include "nodegit_wrapper.cc"

  #include "../include/cred.h"
  #include "../include/cert.h"
  #include "../include/indexer_progress.h"
  #include "../include/buf.h"
 
using namespace v8;
using namespace node;
using namespace std;


// generated from struct_content.cc
GitRemoteCallbacks::GitRemoteCallbacks() : NodeGitWrapper<GitRemoteCallbacksTraits>(NULL, true, v8::Local<v8::Object>())
{
        git_remote_callbacks wrappedValue = GIT_REMOTE_CALLBACKS_INIT;
      this->raw = (git_remote_callbacks*) malloc(sizeof(git_remote_callbacks));
      memcpy(this->raw, &wrappedValue, sizeof(git_remote_callbacks));
  
  this->ConstructFields();
}

GitRemoteCallbacks::GitRemoteCallbacks(git_remote_callbacks* raw, bool selfFreeing, v8::Local<v8::Object> owner)
 : NodeGitWrapper<GitRemoteCallbacksTraits>(raw, selfFreeing, owner)
{
  this->ConstructFields();
}

GitRemoteCallbacks::~GitRemoteCallbacks() {
             if (this->credentials.HasCallback()) {
               this->raw->payload = NULL;
           }
             if (this->certificate_check.HasCallback()) {
               this->raw->payload = NULL;
           }
             if (this->transfer_progress.HasCallback()) {
               this->raw->payload = NULL;
           }
             if (this->push_transfer_progress.HasCallback()) {
               this->raw->payload = NULL;
           }
             if (this->push_update_reference.HasCallback()) {
               this->raw->payload = NULL;
           }
                if (this->resolve_url.HasCallback()) {
               this->raw->payload = NULL;
           }
    }

void GitRemoteCallbacks::ConstructFields() {
   
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->credentials = NULL;
             this->raw->payload = (void *)this;
    
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->certificate_check = NULL;
             this->raw->payload = (void *)this;
    
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->transfer_progress = NULL;
             this->raw->payload = (void *)this;
    
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->push_transfer_progress = NULL;
             this->raw->payload = (void *)this;
    
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->push_update_reference = NULL;
             this->raw->payload = (void *)this;
    
          v8::Local<Value> payload = Nan::Undefined();
          this->payload.Reset(payload);
   
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->resolve_url = NULL;
             this->raw->payload = (void *)this;
     }

void GitRemoteCallbacks::InitializeComponent(v8::Local<v8::Object> target) {
  Nan::HandleScope scope;

  v8::Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(JSNewFunction);

  tpl->InstanceTemplate()->SetInternalFieldCount(1);
  tpl->SetClassName(Nan::New("RemoteCallbacks").ToLocalChecked());

      Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("version").ToLocalChecked(), GetVersion, SetVersion);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("credentials").ToLocalChecked(), GetCredentials, SetCredentials);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("certificateCheck").ToLocalChecked(), GetCertificateCheck, SetCertificateCheck);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("transferProgress").ToLocalChecked(), GetTransferProgress, SetTransferProgress);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("pushTransferProgress").ToLocalChecked(), GetPushTransferProgress, SetPushTransferProgress);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("pushUpdateReference").ToLocalChecked(), GetPushUpdateReference, SetPushUpdateReference);
          Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("resolveUrl").ToLocalChecked(), GetResolveUrl, SetResolveUrl);
   
  InitializeTemplate(tpl);

  v8::Local<Function> _constructor_template = Nan::GetFunction(tpl).ToLocalChecked();
  constructor_template.Reset(_constructor_template);
  Nan::Set(target, Nan::New("RemoteCallbacks").ToLocalChecked(), _constructor_template);
}

    NAN_GETTER(GitRemoteCallbacks::GetVersion) {

      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->version));
     }

    NAN_SETTER(GitRemoteCallbacks::SetVersion) {
      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->version = (unsigned int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitRemoteCallbacks::GetCredentials) {

      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

        if (wrapper->credentials.HasCallback()) {
          info.GetReturnValue().Set(wrapper->credentials.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitRemoteCallbacks::SetCredentials) {
      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

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
          if (!wrapper->raw->credentials) {
            wrapper->raw->credentials = (git_cred_acquire_cb)credentials_cppCallback;
          }

          wrapper->credentials.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitRemoteCallbacks* GitRemoteCallbacks::credentials_getInstanceFromBaton(CredentialsBaton* baton) {
           return static_cast<GitRemoteCallbacks*>(baton->
                  payload
  );
       }

      int GitRemoteCallbacks::credentials_cppCallback (
          git_cred ** cred,           const char * url,           const char * username_from_url,           unsigned int allowed_types,           void * payload        ) {
        CredentialsBaton *baton =
          new CredentialsBaton(1);

          baton->cred = cred;
          baton->url = url;
          baton->username_from_url = username_from_url;
          baton->allowed_types = allowed_types;
          baton->payload = payload;
 
        GitRemoteCallbacks* instance = credentials_getInstanceFromBaton(baton);

           int result;

          if (instance->credentials.WillBeThrottled()) {
            result = baton->defaultResult;
            delete baton;
          } else if (instance->credentials.ShouldWaitForResult()) {
            result = baton->ExecuteAsync(credentials_async);
            delete baton;
          } else {
            result = baton->defaultResult;
            baton->ExecuteAsync(credentials_async, deleteBaton);
          }
          return result;
       }


      void GitRemoteCallbacks::credentials_async(void *untypedBaton) {
        Nan::HandleScope scope;

        CredentialsBaton* baton = static_cast<CredentialsBaton*>(untypedBaton);
        GitRemoteCallbacks* instance = credentials_getInstanceFromBaton(baton);

        if (instance->credentials.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

           v8::Local<Value> argv[3] = {
               baton->url == NULL
                ? Nan::EmptyString()
                : Nan::New( baton->url).ToLocalChecked()
 ,               baton->username_from_url == NULL
                ? Nan::EmptyString()
                : Nan::New( baton->username_from_url).ToLocalChecked()
 ,                Nan::New(baton->allowed_types)
            };
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->credentials.GetCallback()), 3, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitRemoteCallbacks::credentials_promiseCompleted)) {
          return;
        }

             if (result.IsEmpty() || result->IsNativeError()) {
              baton->result = -1;
            }
            else if (!result->IsNull() && !result->IsUndefined()) {
              GitCred* wrapper = Nan::ObjectWrap::Unwrap<GitCred>(Nan::To<v8::Object>(result).ToLocalChecked());
              wrapper->selfFreeing = false;

              *baton->cred = wrapper->GetValue();
              baton->result = 0;
             }
            else {
              baton->result = baton->defaultResult;
            }
           baton->Done();
       }

      void GitRemoteCallbacks::credentials_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
        Nan::HandleScope scope;

        CredentialsBaton* baton = static_cast<CredentialsBaton*>(_baton);
           if (isFulfilled) {
              if (result.IsEmpty() || result->IsNativeError()) {
                baton->result = -1;
              }
              else if (!result->IsNull() && !result->IsUndefined()) {
                GitCred* wrapper = Nan::ObjectWrap::Unwrap<GitCred>(Nan::To<v8::Object>(result).ToLocalChecked());
                wrapper->selfFreeing = false;

                *baton->cred = wrapper->GetValue();
                baton->result = 0;
               }
              else {
                baton->result = baton->defaultResult;
              }
           }
          else {
            // promise was rejected
               GitRemoteCallbacks* instance = static_cast<GitRemoteCallbacks*>(baton->    payload  );
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitRemoteCallbacks::GetCertificateCheck) {

      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

        if (wrapper->certificate_check.HasCallback()) {
          info.GetReturnValue().Set(wrapper->certificate_check.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitRemoteCallbacks::SetCertificateCheck) {
      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

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
          if (!wrapper->raw->certificate_check) {
            wrapper->raw->certificate_check = (git_transport_certificate_check_cb)certificate_check_cppCallback;
          }

          wrapper->certificate_check.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitRemoteCallbacks* GitRemoteCallbacks::certificate_check_getInstanceFromBaton(CertificateCheckBaton* baton) {
           return static_cast<GitRemoteCallbacks*>(baton->
                 payload
  );
       }

      int GitRemoteCallbacks::certificate_check_cppCallback (
          git_cert * cert,           int valid,           const char * host,           void * payload        ) {
        CertificateCheckBaton *baton =
          new CertificateCheckBaton(1);

          baton->cert = cert;
          baton->valid = valid;
          baton->host = host;
          baton->payload = payload;
 
        GitRemoteCallbacks* instance = certificate_check_getInstanceFromBaton(baton);

           int result;

          if (instance->certificate_check.WillBeThrottled()) {
            result = baton->defaultResult;
            delete baton;
          } else if (instance->certificate_check.ShouldWaitForResult()) {
            result = baton->ExecuteAsync(certificate_check_async);
            delete baton;
          } else {
            result = baton->defaultResult;
            baton->ExecuteAsync(certificate_check_async, deleteBaton);
          }
          return result;
       }


      void GitRemoteCallbacks::certificate_check_async(void *untypedBaton) {
        Nan::HandleScope scope;

        CertificateCheckBaton* baton = static_cast<CertificateCheckBaton*>(untypedBaton);
        GitRemoteCallbacks* instance = certificate_check_getInstanceFromBaton(baton);

        if (instance->certificate_check.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

           v8::Local<Value> argv[3] = {
               GitCert::New(baton->cert, false)
 ,                Nan::New(baton->valid)
 ,               baton->host == NULL
                ? Nan::EmptyString()
                : Nan::New( baton->host).ToLocalChecked()
            };
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->certificate_check.GetCallback()), 3, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitRemoteCallbacks::certificate_check_promiseCompleted)) {
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

      void GitRemoteCallbacks::certificate_check_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
        Nan::HandleScope scope;

        CertificateCheckBaton* baton = static_cast<CertificateCheckBaton*>(_baton);
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
               GitRemoteCallbacks* instance = static_cast<GitRemoteCallbacks*>(baton->   payload  );
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitRemoteCallbacks::GetTransferProgress) {

      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

        if (wrapper->transfer_progress.HasCallback()) {
          info.GetReturnValue().Set(wrapper->transfer_progress.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitRemoteCallbacks::SetTransferProgress) {
      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

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
          if (!wrapper->raw->transfer_progress) {
            wrapper->raw->transfer_progress = (git_indexer_progress_cb)transfer_progress_cppCallback;
          }

          wrapper->transfer_progress.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitRemoteCallbacks* GitRemoteCallbacks::transfer_progress_getInstanceFromBaton(TransferProgressBaton* baton) {
           return static_cast<GitRemoteCallbacks*>(baton->
               payload
  );
       }

      int GitRemoteCallbacks::transfer_progress_cppCallback (
          const git_indexer_progress * stats,           void * payload        ) {
        TransferProgressBaton *baton =
          new TransferProgressBaton(0);

          baton->stats = stats;
          baton->payload = payload;
 
        GitRemoteCallbacks* instance = transfer_progress_getInstanceFromBaton(baton);

           int result;

          if (instance->transfer_progress.WillBeThrottled()) {
            result = baton->defaultResult;
            delete baton;
          } else if (instance->transfer_progress.ShouldWaitForResult()) {
            result = baton->ExecuteAsync(transfer_progress_async);
            delete baton;
          } else {
            result = baton->defaultResult;
            baton->ExecuteAsync(transfer_progress_async, deleteBaton);
          }
          return result;
       }


      void GitRemoteCallbacks::transfer_progress_async(void *untypedBaton) {
        Nan::HandleScope scope;

        TransferProgressBaton* baton = static_cast<TransferProgressBaton*>(untypedBaton);
        GitRemoteCallbacks* instance = transfer_progress_getInstanceFromBaton(baton);

        if (instance->transfer_progress.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

           v8::Local<Value> argv[1] = {
               GitIndexerProgress::New(baton->stats, false)
            };
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->transfer_progress.GetCallback()), 1, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitRemoteCallbacks::transfer_progress_promiseCompleted)) {
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

      void GitRemoteCallbacks::transfer_progress_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
        Nan::HandleScope scope;

        TransferProgressBaton* baton = static_cast<TransferProgressBaton*>(_baton);
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
               GitRemoteCallbacks* instance = static_cast<GitRemoteCallbacks*>(baton-> payload  );
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitRemoteCallbacks::GetPushTransferProgress) {

      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

        if (wrapper->push_transfer_progress.HasCallback()) {
          info.GetReturnValue().Set(wrapper->push_transfer_progress.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitRemoteCallbacks::SetPushTransferProgress) {
      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

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
          if (!wrapper->raw->push_transfer_progress) {
            wrapper->raw->push_transfer_progress = (git_push_transfer_progress_cb)push_transfer_progress_cppCallback;
          }

          wrapper->push_transfer_progress.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitRemoteCallbacks* GitRemoteCallbacks::push_transfer_progress_getInstanceFromBaton(PushTransferProgressBaton* baton) {
           return static_cast<GitRemoteCallbacks*>(baton->
                 payload
  );
       }

      int GitRemoteCallbacks::push_transfer_progress_cppCallback (
          unsigned int current,           unsigned int total,           size_t bytes,           void * payload        ) {
        PushTransferProgressBaton *baton =
          new PushTransferProgressBaton(0);

          baton->current = current;
          baton->total = total;
          baton->bytes = bytes;
          baton->payload = payload;
 
        GitRemoteCallbacks* instance = push_transfer_progress_getInstanceFromBaton(baton);

           int result;

          if (instance->push_transfer_progress.WillBeThrottled()) {
            result = baton->defaultResult;
            delete baton;
          } else if (instance->push_transfer_progress.ShouldWaitForResult()) {
            result = baton->ExecuteAsync(push_transfer_progress_async);
            delete baton;
          } else {
            result = baton->defaultResult;
            baton->ExecuteAsync(push_transfer_progress_async, deleteBaton);
          }
          return result;
       }


      void GitRemoteCallbacks::push_transfer_progress_async(void *untypedBaton) {
        Nan::HandleScope scope;

        PushTransferProgressBaton* baton = static_cast<PushTransferProgressBaton*>(untypedBaton);
        GitRemoteCallbacks* instance = push_transfer_progress_getInstanceFromBaton(baton);

        if (instance->push_transfer_progress.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

           v8::Local<Value> argv[3] = {
                Nan::New(baton->current)
 ,                Nan::New(baton->total)
 ,               // HACK: NAN should really have an overload for Nan::New to support size_t
              Nan::New((unsigned int)baton->bytes)
            };
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->push_transfer_progress.GetCallback()), 3, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitRemoteCallbacks::push_transfer_progress_promiseCompleted)) {
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

      void GitRemoteCallbacks::push_transfer_progress_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
        Nan::HandleScope scope;

        PushTransferProgressBaton* baton = static_cast<PushTransferProgressBaton*>(_baton);
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
               GitRemoteCallbacks* instance = static_cast<GitRemoteCallbacks*>(baton->   payload  );
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitRemoteCallbacks::GetPushUpdateReference) {

      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

        if (wrapper->push_update_reference.HasCallback()) {
          info.GetReturnValue().Set(wrapper->push_update_reference.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitRemoteCallbacks::SetPushUpdateReference) {
      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

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
          if (!wrapper->raw->push_update_reference) {
            wrapper->raw->push_update_reference = (git_push_update_reference_cb)push_update_reference_cppCallback;
          }

          wrapper->push_update_reference.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitRemoteCallbacks* GitRemoteCallbacks::push_update_reference_getInstanceFromBaton(PushUpdateReferenceBaton* baton) {
           return static_cast<GitRemoteCallbacks*>(baton->
                data
  );
       }

      int GitRemoteCallbacks::push_update_reference_cppCallback (
          const char * refname,           const char * status,           void * data        ) {
        PushUpdateReferenceBaton *baton =
          new PushUpdateReferenceBaton(1);

          baton->refname = refname;
          baton->status = status;
          baton->data = data;
 
        GitRemoteCallbacks* instance = push_update_reference_getInstanceFromBaton(baton);

           int result;

          if (instance->push_update_reference.WillBeThrottled()) {
            result = baton->defaultResult;
            delete baton;
          } else if (instance->push_update_reference.ShouldWaitForResult()) {
            result = baton->ExecuteAsync(push_update_reference_async);
            delete baton;
          } else {
            result = baton->defaultResult;
            baton->ExecuteAsync(push_update_reference_async, deleteBaton);
          }
          return result;
       }


      void GitRemoteCallbacks::push_update_reference_async(void *untypedBaton) {
        Nan::HandleScope scope;

        PushUpdateReferenceBaton* baton = static_cast<PushUpdateReferenceBaton*>(untypedBaton);
        GitRemoteCallbacks* instance = push_update_reference_getInstanceFromBaton(baton);

        if (instance->push_update_reference.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

           v8::Local<Value> argv[3] = {
               baton->refname == NULL
                ? Nan::EmptyString()
                : Nan::New( baton->refname).ToLocalChecked()
 ,               baton->status == NULL
                ? Nan::EmptyString()
                : Nan::New( baton->status).ToLocalChecked()
 ,                Nan::New(baton->data)
            };
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->push_update_reference.GetCallback()), 3, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitRemoteCallbacks::push_update_reference_promiseCompleted)) {
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

      void GitRemoteCallbacks::push_update_reference_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
        Nan::HandleScope scope;

        PushUpdateReferenceBaton* baton = static_cast<PushUpdateReferenceBaton*>(_baton);
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
               GitRemoteCallbacks* instance = static_cast<GitRemoteCallbacks*>(baton->  data  );
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitRemoteCallbacks::GetPayload) {

      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->payload));

     }

    NAN_SETTER(GitRemoteCallbacks::SetPayload) {
      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

        wrapper->payload.Reset(value);

     }

      NAN_GETTER(GitRemoteCallbacks::GetResolveUrl) {

      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

        if (wrapper->resolve_url.HasCallback()) {
          info.GetReturnValue().Set(wrapper->resolve_url.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitRemoteCallbacks::SetResolveUrl) {
      GitRemoteCallbacks *wrapper = Nan::ObjectWrap::Unwrap<GitRemoteCallbacks>(info.This());

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
          if (!wrapper->raw->resolve_url) {
            wrapper->raw->resolve_url = (git_url_resolve_cb)resolve_url_cppCallback;
          }

          wrapper->resolve_url.SetCallback(callback, throttle, waitForResult);
        }

     }

      GitRemoteCallbacks* GitRemoteCallbacks::resolve_url_getInstanceFromBaton(ResolveUrlBaton* baton) {
           return static_cast<GitRemoteCallbacks*>(baton->
                 payload
  );
       }

      int GitRemoteCallbacks::resolve_url_cppCallback (
          git_buf * url_resolved,           const char * url,           int direction,           void * payload        ) {
        ResolveUrlBaton *baton =
          new ResolveUrlBaton(-30);

          baton->url_resolved = url_resolved;
          baton->url = url;
          baton->direction = direction;
          baton->payload = payload;
 
        GitRemoteCallbacks* instance = resolve_url_getInstanceFromBaton(baton);

           int result;

          if (instance->resolve_url.WillBeThrottled()) {
            result = baton->defaultResult;
            delete baton;
          } else if (instance->resolve_url.ShouldWaitForResult()) {
            result = baton->ExecuteAsync(resolve_url_async);
            delete baton;
          } else {
            result = baton->defaultResult;
            baton->ExecuteAsync(resolve_url_async, deleteBaton);
          }
          return result;
       }


      void GitRemoteCallbacks::resolve_url_async(void *untypedBaton) {
        Nan::HandleScope scope;

        ResolveUrlBaton* baton = static_cast<ResolveUrlBaton*>(untypedBaton);
        GitRemoteCallbacks* instance = resolve_url_getInstanceFromBaton(baton);

        if (instance->resolve_url.GetCallback()->IsEmpty()) {
            baton->result = baton->defaultResult; // no results acquired
           baton->Done();
          return;
        }

           v8::Local<Value> argv[3] = {
               GitBuf::New(baton->url_resolved, false)
 ,               baton->url == NULL
                ? Nan::EmptyString()
                : Nan::New( baton->url).ToLocalChecked()
 ,                Nan::New(baton->direction)
            };
 
        Nan::TryCatch tryCatch;

        // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
        Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*(instance->resolve_url.GetCallback()), 3, argv);
        v8::Local<v8::Value> result;
        if (!maybeResult.IsEmpty()) {
          result = maybeResult.ToLocalChecked();
        }

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitRemoteCallbacks::resolve_url_promiseCompleted)) {
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

      void GitRemoteCallbacks::resolve_url_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
        Nan::HandleScope scope;

        ResolveUrlBaton* baton = static_cast<ResolveUrlBaton*>(_baton);
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
               GitRemoteCallbacks* instance = static_cast<GitRemoteCallbacks*>(baton->   payload  );
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
   
// force base class template instantiation, to make sure we get all the
// methods, statics, etc.
template class NodeGitWrapper<GitRemoteCallbacksTraits>;
