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
#include "../include/proxy_options.h"
#include "nodegit_wrapper.cc"

  #include "../include/cred.h"
  #include "../include/cert.h"
 
using namespace v8;
using namespace node;
using namespace std;


// generated from struct_content.cc
GitProxyOptions::GitProxyOptions() : NodeGitWrapper<GitProxyOptionsTraits>(NULL, true, v8::Local<v8::Object>())
{
        git_proxy_options wrappedValue = GIT_PROXY_OPTIONS_INIT;
      this->raw = (git_proxy_options*) malloc(sizeof(git_proxy_options));
      memcpy(this->raw, &wrappedValue, sizeof(git_proxy_options));
  
  this->ConstructFields();
}

GitProxyOptions::GitProxyOptions(git_proxy_options* raw, bool selfFreeing, v8::Local<v8::Object> owner)
 : NodeGitWrapper<GitProxyOptionsTraits>(raw, selfFreeing, owner)
{
  this->ConstructFields();
}

GitProxyOptions::~GitProxyOptions() {
                  if (this->credentials.HasCallback()) {
               this->raw->payload = NULL;
           }
             if (this->certificate_check.HasCallback()) {
               this->raw->payload = NULL;
           }
       }

void GitProxyOptions::ConstructFields() {
        
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->credentials = NULL;
             this->raw->payload = (void *)this;
    
          // Set the static method call and set the payload for this function to be
          // the current instance
          this->raw->certificate_check = NULL;
             this->raw->payload = (void *)this;
    
          v8::Local<Value> payload = Nan::Undefined();
          this->payload.Reset(payload);
    }

void GitProxyOptions::InitializeComponent(v8::Local<v8::Object> target) {
  Nan::HandleScope scope;

  v8::Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(JSNewFunction);

  tpl->InstanceTemplate()->SetInternalFieldCount(1);
  tpl->SetClassName(Nan::New("ProxyOptions").ToLocalChecked());

      Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("version").ToLocalChecked(), GetVersion, SetVersion);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("type").ToLocalChecked(), GetType, SetType);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("url").ToLocalChecked(), GetUrl, SetUrl);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("credentials").ToLocalChecked(), GetCredentials, SetCredentials);
        Nan::SetAccessor(tpl->InstanceTemplate(), Nan::New("certificateCheck").ToLocalChecked(), GetCertificateCheck, SetCertificateCheck);
     
  InitializeTemplate(tpl);

  v8::Local<Function> _constructor_template = Nan::GetFunction(tpl).ToLocalChecked();
  constructor_template.Reset(_constructor_template);
  Nan::Set(target, Nan::New("ProxyOptions").ToLocalChecked(), _constructor_template);
}

    NAN_GETTER(GitProxyOptions::GetVersion) {

      GitProxyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitProxyOptions>(info.This());

        info.GetReturnValue().Set(Nan::New<Number>(wrapper->GetValue()->version));
     }

    NAN_SETTER(GitProxyOptions::SetVersion) {
      GitProxyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitProxyOptions>(info.This());

         if (value->IsNumber()) {
          wrapper->GetValue()->version = (unsigned int) Nan::To<int32_t>(value).FromJust();
        }
     }

      NAN_GETTER(GitProxyOptions::GetType) {

      GitProxyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitProxyOptions>(info.This());

        info.GetReturnValue().Set(Nan::New((int)wrapper->GetValue()->type));

     }

    NAN_SETTER(GitProxyOptions::SetType) {
      GitProxyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitProxyOptions>(info.This());

        if (value->IsNumber()) {
          wrapper->GetValue()->type = (git_proxy_t) Nan::To<int32_t>(value).FromJust();
        }

     }

      NAN_GETTER(GitProxyOptions::GetUrl) {

      GitProxyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitProxyOptions>(info.This());

        if (wrapper->GetValue()->url) {
          info.GetReturnValue().Set(Nan::New<String>(wrapper->GetValue()->url).ToLocalChecked());
        }
        else {
          return;
        }

     }

    NAN_SETTER(GitProxyOptions::SetUrl) {
      GitProxyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitProxyOptions>(info.This());

        if (wrapper->GetValue()->url) {
        }

        Nan::Utf8String str(value);
        wrapper->GetValue()->url = strdup(*str);

     }

      NAN_GETTER(GitProxyOptions::GetCredentials) {

      GitProxyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitProxyOptions>(info.This());

        if (wrapper->credentials.HasCallback()) {
          info.GetReturnValue().Set(wrapper->credentials.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitProxyOptions::SetCredentials) {
      GitProxyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitProxyOptions>(info.This());

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

      GitProxyOptions* GitProxyOptions::credentials_getInstanceFromBaton(CredentialsBaton* baton) {
           return static_cast<GitProxyOptions*>(baton->
                  payload
  );
       }

      int GitProxyOptions::credentials_cppCallback (
          git_cred ** cred,           const char * url,           const char * username_from_url,           unsigned int allowed_types,           void * payload        ) {
        CredentialsBaton *baton =
          new CredentialsBaton(1);

          baton->cred = cred;
          baton->url = url;
          baton->username_from_url = username_from_url;
          baton->allowed_types = allowed_types;
          baton->payload = payload;
 
        GitProxyOptions* instance = credentials_getInstanceFromBaton(baton);

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


      void GitProxyOptions::credentials_async(void *untypedBaton) {
        Nan::HandleScope scope;

        CredentialsBaton* baton = static_cast<CredentialsBaton*>(untypedBaton);
        GitProxyOptions* instance = credentials_getInstanceFromBaton(baton);

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

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitProxyOptions::credentials_promiseCompleted)) {
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

      void GitProxyOptions::credentials_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
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
               GitProxyOptions* instance = static_cast<GitProxyOptions*>(baton->    payload  );
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitProxyOptions::GetCertificateCheck) {

      GitProxyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitProxyOptions>(info.This());

        if (wrapper->certificate_check.HasCallback()) {
          info.GetReturnValue().Set(wrapper->certificate_check.GetCallback()->GetFunction());
        } else {
          info.GetReturnValue().SetUndefined();
        }

     }

    NAN_SETTER(GitProxyOptions::SetCertificateCheck) {
      GitProxyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitProxyOptions>(info.This());

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

      GitProxyOptions* GitProxyOptions::certificate_check_getInstanceFromBaton(CertificateCheckBaton* baton) {
           return static_cast<GitProxyOptions*>(baton->
                 payload
  );
       }

      int GitProxyOptions::certificate_check_cppCallback (
          git_cert * cert,           int valid,           const char * host,           void * payload        ) {
        CertificateCheckBaton *baton =
          new CertificateCheckBaton(1);

          baton->cert = cert;
          baton->valid = valid;
          baton->host = host;
          baton->payload = payload;
 
        GitProxyOptions* instance = certificate_check_getInstanceFromBaton(baton);

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


      void GitProxyOptions::certificate_check_async(void *untypedBaton) {
        Nan::HandleScope scope;

        CertificateCheckBaton* baton = static_cast<CertificateCheckBaton*>(untypedBaton);
        GitProxyOptions* instance = certificate_check_getInstanceFromBaton(baton);

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

        if(PromiseCompletion::ForwardIfPromise(result, baton, GitProxyOptions::certificate_check_promiseCompleted)) {
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

      void GitProxyOptions::certificate_check_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
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
               GitProxyOptions* instance = static_cast<GitProxyOptions*>(baton->   payload  );
             v8::Local<v8::Object> parent = instance->handle();
            SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

            baton->result = -1;
          }
          baton->Done();
       }
      NAN_GETTER(GitProxyOptions::GetPayload) {

      GitProxyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitProxyOptions>(info.This());

        info.GetReturnValue().Set(Nan::New(wrapper->payload));

     }

    NAN_SETTER(GitProxyOptions::SetPayload) {
      GitProxyOptions *wrapper = Nan::ObjectWrap::Unwrap<GitProxyOptions>(info.This());

        wrapper->payload.Reset(value);

     }

   
// force base class template instantiation, to make sure we get all the
// methods, statics, etc.
template class NodeGitWrapper<GitProxyOptionsTraits>;
