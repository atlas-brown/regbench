// This is a generated file, modify: generate/templates/templates/class_content.cc

#include <nan.h>
#include <string.h>

extern "C" {
  #include <git2.h>
 }

#include "../include/nodegit.h"
#include "../include/lock_master.h"
#include "../include/functions/copy.h"
#include "../include/blob.h"
#include "nodegit_wrapper.cc"
#include "../include/async_libgit2_queue_worker.h"

  #include "../include/wrapper.h"
  #include "node_buffer.h"
  #include "../include/oid.h"
  #include "../include/repository.h"
  #include "../include/buf.h"
  #include "../include/blob_filter_options.h"
 
#include <iostream>

using namespace std;
using namespace v8;
using namespace node;

  GitBlob::~GitBlob() {
    // this will cause an error if you have a non-self-freeing object that also needs
    // to save values. Since the object that will eventually free the object has no
    // way of knowing to free these values.
                                                             }

  void GitBlob::InitializeComponent(v8::Local<v8::Object> target) {
    Nan::HandleScope scope;

    v8::Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(JSNewFunction);

    tpl->InstanceTemplate()->SetInternalFieldCount(1);
    tpl->SetClassName(Nan::New("Blob").ToLocalChecked());

           Nan::SetMethod(tpl, "createFromBuffer", CreateFromBuffer);
             Nan::SetMethod(tpl, "createFromDisk", CreateFromDisk);
             Nan::SetMethod(tpl, "createFromWorkdir", CreateFromWorkdir);
            Nan::SetPrototypeMethod(tpl, "dup", Dup);
            Nan::SetPrototypeMethod(tpl, "filter", Filter);
             Nan::SetMethod(tpl, "filteredContent", FilteredContent);
            Nan::SetPrototypeMethod(tpl, "id", Id);
            Nan::SetPrototypeMethod(tpl, "isBinary", IsBinary);
             Nan::SetMethod(tpl, "lookup", Lookup);
             Nan::SetMethod(tpl, "lookupPrefix", LookupPrefix);
            Nan::SetPrototypeMethod(tpl, "owner", Owner);
            Nan::SetPrototypeMethod(tpl, "rawcontent", Rawcontent);
            Nan::SetPrototypeMethod(tpl, "rawsize", Rawsize);
    
    InitializeTemplate(tpl);

    v8::Local<Function> _constructor_template = Nan::GetFunction(tpl).ToLocalChecked();
    constructor_template.Reset(_constructor_template);
    Nan::Set(target, Nan::New("Blob").ToLocalChecked(), _constructor_template);
  }

 
/*
  * @param Repository repo
   * @param Buffer buffer
   * @param Number len
    * @param Oid callback
   */
NAN_METHOD(GitBlob::CreateFromBuffer) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsObject()) {
    return Nan::ThrowError("Buffer buffer is required.");
  }

  if (info.Length() == 2 || !info[2]->IsNumber()) {
    return Nan::ThrowError("Number len is required.");
  }

  if (info.Length() == 3 || !info[3]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  CreateFromBufferBaton* baton = new CreateFromBufferBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

      baton->id = (git_oid *)malloc(sizeof(git_oid ));
// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  const void * from_buffer = NULL;

  from_buffer = Buffer::Data(Nan::To<v8::Object>(info[1]).ToLocalChecked());
// end convert_from_v8 block
          baton->buffer = from_buffer;
// start convert_from_v8 block
  size_t from_len;
      from_len = (size_t)   info[2].As<v8::Number>()->Value();
// end convert_from_v8 block
          baton->len = from_len;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[3]));
  CreateFromBufferWorker *worker = new CreateFromBufferWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("buffer", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("len", Nan::To<v8::Object>(info[2]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitBlob::CreateFromBufferWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->id
            ,baton->repo
            ,baton->buffer
    );

    int result = git_blob_create_from_buffer(
baton->id,baton->repo,baton->buffer,baton->len  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitBlob::CreateFromBufferWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->id != NULL) {
        to = GitOid::New(
        baton->id,
        true
       );
   }
  else {
    to = Nan::Null();
  }
  // end convert_to_v8 block
      v8::Local<v8::Value> result = to;

    v8::Local<v8::Value> argv[2] = {
      Nan::Null(),
      result
    };
    callback->Call(2, argv, async_resource);
  } else {
    if (baton->error) {
      v8::Local<v8::Object> err;
      if (baton->error->message) {
        err = Nan::To<v8::Object>(Nan::Error(baton->error->message)).ToLocalChecked();
      } else {
        err = Nan::To<v8::Object>(Nan::Error("Method createFromBuffer has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.createFromBuffer").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("repo"));
              workerArguments.push(GetFromPersistent("buffer"));
              workerArguments.push(GetFromPersistent("len"));
      bool callbackFired = false;
      while(!workerArguments.empty()) {
        v8::Local<v8::Value> node = workerArguments.front();
        workerArguments.pop();

        if (
          !node->IsObject()
          || node->IsArray()
          || node->IsBooleanObject()
          || node->IsDate()
          || node->IsFunction()
          || node->IsNumberObject()
          || node->IsRegExp()
          || node->IsStringObject()
        ) {
          continue;
        }

        v8::Local<v8::Object> nodeObj = Nan::To<v8::Object>(node).ToLocalChecked();
        v8::Local<v8::Value> checkValue = GetPrivate(nodeObj, Nan::New("NodeGitPromiseError").ToLocalChecked());

        if (!checkValue.IsEmpty() && !checkValue->IsNull() && !checkValue->IsUndefined()) {
          v8::Local<v8::Value> argv[1] = {
            Nan::To<v8::Object>(checkValue).ToLocalChecked()
          };
          callback->Call(1, argv, async_resource);
          callbackFired = true;
          break;
        }

        v8::Local<v8::Array> properties = Nan::GetPropertyNames(nodeObj).ToLocalChecked();
        for (unsigned int propIndex = 0; propIndex < properties->Length(); ++propIndex) {
          v8::Local<v8::String> propName = Nan::To<v8::String>(Nan::Get(properties, propIndex).ToLocalChecked()).ToLocalChecked();
          v8::Local<v8::Value> nodeToQueue = Nan::Get(nodeObj, propName).ToLocalChecked();
          if (!nodeToQueue->IsUndefined()) {
            workerArguments.push(nodeToQueue);
          }
        }
      }

      if (!callbackFired) {
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method createFromBuffer has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.createFromBuffer").ToLocalChecked());
        v8::Local<v8::Value> argv[1] = {
          err
        };
        callback->Call(1, argv, async_resource);
      }
    } else {
      callback->Call(0, NULL, async_resource);
    }

  }


  delete baton;
}

  
/*
  * @param Repository repo
   * @param String path
    * @param Oid callback
   */
NAN_METHOD(GitBlob::CreateFromDisk) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsString()) {
    return Nan::ThrowError("String path is required.");
  }

  if (info.Length() == 2 || !info[2]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  CreateFromDiskBaton* baton = new CreateFromDiskBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

      baton->id = (git_oid *)malloc(sizeof(git_oid ));
// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  const char * from_path = NULL;

  Nan::Utf8String path(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_path = (const char *) malloc(path.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_path, *path, path.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_path) + path.length()), 0, 1);
// end convert_from_v8 block
          baton->path = from_path;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[2]));
  CreateFromDiskWorker *worker = new CreateFromDiskWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("path", Nan::To<v8::Object>(info[1]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitBlob::CreateFromDiskWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->id
            ,baton->repo
            ,baton->path
    );

    int result = git_blob_create_from_disk(
baton->id,baton->repo,baton->path  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitBlob::CreateFromDiskWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->id != NULL) {
        to = GitOid::New(
        baton->id,
        true
       );
   }
  else {
    to = Nan::Null();
  }
  // end convert_to_v8 block
      v8::Local<v8::Value> result = to;

    v8::Local<v8::Value> argv[2] = {
      Nan::Null(),
      result
    };
    callback->Call(2, argv, async_resource);
  } else {
    if (baton->error) {
      v8::Local<v8::Object> err;
      if (baton->error->message) {
        err = Nan::To<v8::Object>(Nan::Error(baton->error->message)).ToLocalChecked();
      } else {
        err = Nan::To<v8::Object>(Nan::Error("Method createFromDisk has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.createFromDisk").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("repo"));
              workerArguments.push(GetFromPersistent("path"));
      bool callbackFired = false;
      while(!workerArguments.empty()) {
        v8::Local<v8::Value> node = workerArguments.front();
        workerArguments.pop();

        if (
          !node->IsObject()
          || node->IsArray()
          || node->IsBooleanObject()
          || node->IsDate()
          || node->IsFunction()
          || node->IsNumberObject()
          || node->IsRegExp()
          || node->IsStringObject()
        ) {
          continue;
        }

        v8::Local<v8::Object> nodeObj = Nan::To<v8::Object>(node).ToLocalChecked();
        v8::Local<v8::Value> checkValue = GetPrivate(nodeObj, Nan::New("NodeGitPromiseError").ToLocalChecked());

        if (!checkValue.IsEmpty() && !checkValue->IsNull() && !checkValue->IsUndefined()) {
          v8::Local<v8::Value> argv[1] = {
            Nan::To<v8::Object>(checkValue).ToLocalChecked()
          };
          callback->Call(1, argv, async_resource);
          callbackFired = true;
          break;
        }

        v8::Local<v8::Array> properties = Nan::GetPropertyNames(nodeObj).ToLocalChecked();
        for (unsigned int propIndex = 0; propIndex < properties->Length(); ++propIndex) {
          v8::Local<v8::String> propName = Nan::To<v8::String>(Nan::Get(properties, propIndex).ToLocalChecked()).ToLocalChecked();
          v8::Local<v8::Value> nodeToQueue = Nan::Get(nodeObj, propName).ToLocalChecked();
          if (!nodeToQueue->IsUndefined()) {
            workerArguments.push(nodeToQueue);
          }
        }
      }

      if (!callbackFired) {
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method createFromDisk has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.createFromDisk").ToLocalChecked());
        v8::Local<v8::Value> argv[1] = {
          err
        };
        callback->Call(1, argv, async_resource);
      }
    } else {
      callback->Call(0, NULL, async_resource);
    }

  }


  delete baton;
}

  
/*
  * @param Repository repo
   * @param String relative_path
    * @param Oid callback
   */
NAN_METHOD(GitBlob::CreateFromWorkdir) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsString()) {
    return Nan::ThrowError("String relative_path is required.");
  }

  if (info.Length() == 2 || !info[2]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  CreateFromWorkdirBaton* baton = new CreateFromWorkdirBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

      baton->id = (git_oid *)malloc(sizeof(git_oid ));
// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  const char * from_relative_path = NULL;

  Nan::Utf8String relative_path(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_relative_path = (const char *) malloc(relative_path.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_relative_path, *relative_path, relative_path.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_relative_path) + relative_path.length()), 0, 1);
// end convert_from_v8 block
          baton->relative_path = from_relative_path;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[2]));
  CreateFromWorkdirWorker *worker = new CreateFromWorkdirWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("relative_path", Nan::To<v8::Object>(info[1]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitBlob::CreateFromWorkdirWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->id
            ,baton->repo
            ,baton->relative_path
    );

    int result = git_blob_create_from_workdir(
baton->id,baton->repo,baton->relative_path  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitBlob::CreateFromWorkdirWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->id != NULL) {
        to = GitOid::New(
        baton->id,
        true
       );
   }
  else {
    to = Nan::Null();
  }
  // end convert_to_v8 block
      v8::Local<v8::Value> result = to;

    v8::Local<v8::Value> argv[2] = {
      Nan::Null(),
      result
    };
    callback->Call(2, argv, async_resource);
  } else {
    if (baton->error) {
      v8::Local<v8::Object> err;
      if (baton->error->message) {
        err = Nan::To<v8::Object>(Nan::Error(baton->error->message)).ToLocalChecked();
      } else {
        err = Nan::To<v8::Object>(Nan::Error("Method createFromWorkdir has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.createFromWorkdir").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("repo"));
              workerArguments.push(GetFromPersistent("relative_path"));
      bool callbackFired = false;
      while(!workerArguments.empty()) {
        v8::Local<v8::Value> node = workerArguments.front();
        workerArguments.pop();

        if (
          !node->IsObject()
          || node->IsArray()
          || node->IsBooleanObject()
          || node->IsDate()
          || node->IsFunction()
          || node->IsNumberObject()
          || node->IsRegExp()
          || node->IsStringObject()
        ) {
          continue;
        }

        v8::Local<v8::Object> nodeObj = Nan::To<v8::Object>(node).ToLocalChecked();
        v8::Local<v8::Value> checkValue = GetPrivate(nodeObj, Nan::New("NodeGitPromiseError").ToLocalChecked());

        if (!checkValue.IsEmpty() && !checkValue->IsNull() && !checkValue->IsUndefined()) {
          v8::Local<v8::Value> argv[1] = {
            Nan::To<v8::Object>(checkValue).ToLocalChecked()
          };
          callback->Call(1, argv, async_resource);
          callbackFired = true;
          break;
        }

        v8::Local<v8::Array> properties = Nan::GetPropertyNames(nodeObj).ToLocalChecked();
        for (unsigned int propIndex = 0; propIndex < properties->Length(); ++propIndex) {
          v8::Local<v8::String> propName = Nan::To<v8::String>(Nan::Get(properties, propIndex).ToLocalChecked()).ToLocalChecked();
          v8::Local<v8::Value> nodeToQueue = Nan::Get(nodeObj, propName).ToLocalChecked();
          if (!nodeToQueue->IsUndefined()) {
            workerArguments.push(nodeToQueue);
          }
        }
      }

      if (!callbackFired) {
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method createFromWorkdir has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.createFromWorkdir").ToLocalChecked());
        v8::Local<v8::Value> argv[1] = {
          err
        };
        callback->Call(1, argv, async_resource);
      }
    } else {
      callback->Call(0, NULL, async_resource);
    }

  }


  delete baton;
}

  
/*
     * @param Blob callback
   */
NAN_METHOD(GitBlob::Dup) {

  if (info.Length() == 0 || !info[0]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  DupBaton* baton = new DupBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

        baton->source = Nan::ObjectWrap::Unwrap<GitBlob>(info.This())->GetValue();

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[0]));
  DupWorker *worker = new DupWorker(baton, callback);

        worker->SaveToPersistent("source", info.This());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitBlob::DupWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->source
    );

    int result = git_blob_dup(
&baton->out,baton->source  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitBlob::DupWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_blob_owner(baton->out),
            true
          )).ToLocalChecked()
        );
         to = GitBlob::New(
        baton->out,
        true
          , owners
       );
   }
  else {
    to = Nan::Null();
  }
  // end convert_to_v8 block
      v8::Local<v8::Value> result = to;

    v8::Local<v8::Value> argv[2] = {
      Nan::Null(),
      result
    };
    callback->Call(2, argv, async_resource);
  } else {
    if (baton->error) {
      v8::Local<v8::Object> err;
      if (baton->error->message) {
        err = Nan::To<v8::Object>(Nan::Error(baton->error->message)).ToLocalChecked();
      } else {
        err = Nan::To<v8::Object>(Nan::Error("Method dup has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.dup").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
      bool callbackFired = false;
      while(!workerArguments.empty()) {
        v8::Local<v8::Value> node = workerArguments.front();
        workerArguments.pop();

        if (
          !node->IsObject()
          || node->IsArray()
          || node->IsBooleanObject()
          || node->IsDate()
          || node->IsFunction()
          || node->IsNumberObject()
          || node->IsRegExp()
          || node->IsStringObject()
        ) {
          continue;
        }

        v8::Local<v8::Object> nodeObj = Nan::To<v8::Object>(node).ToLocalChecked();
        v8::Local<v8::Value> checkValue = GetPrivate(nodeObj, Nan::New("NodeGitPromiseError").ToLocalChecked());

        if (!checkValue.IsEmpty() && !checkValue->IsNull() && !checkValue->IsUndefined()) {
          v8::Local<v8::Value> argv[1] = {
            Nan::To<v8::Object>(checkValue).ToLocalChecked()
          };
          callback->Call(1, argv, async_resource);
          callbackFired = true;
          break;
        }

        v8::Local<v8::Array> properties = Nan::GetPropertyNames(nodeObj).ToLocalChecked();
        for (unsigned int propIndex = 0; propIndex < properties->Length(); ++propIndex) {
          v8::Local<v8::String> propName = Nan::To<v8::String>(Nan::Get(properties, propIndex).ToLocalChecked()).ToLocalChecked();
          v8::Local<v8::Value> nodeToQueue = Nan::Get(nodeObj, propName).ToLocalChecked();
          if (!nodeToQueue->IsUndefined()) {
            workerArguments.push(nodeToQueue);
          }
        }
      }

      if (!callbackFired) {
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method dup has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.dup").ToLocalChecked());
        v8::Local<v8::Value> argv[1] = {
          err
        };
        callback->Call(1, argv, async_resource);
      }
    } else {
      callback->Call(0, NULL, async_resource);
    }

  }


  delete baton;
}

  
/*
    * @param String as_path
   * @param BlobFilterOptions opts
    * @param Buffer callback
   */
NAN_METHOD(GitBlob::Filter) {

  if (info.Length() == 0 || !info[0]->IsString()) {
    return Nan::ThrowError("String as_path is required.");
  }

  if (info.Length() == 2 || !info[2]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  FilterBaton* baton = new FilterBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

      baton->out = (git_buf *)malloc(sizeof(git_buf ));
        baton->out->ptr = NULL;
        baton->out->size = baton->out->asize = 0;
        baton->blob = Nan::ObjectWrap::Unwrap<GitBlob>(info.This())->GetValue();
// start convert_from_v8 block
  const char * from_as_path = NULL;

  Nan::Utf8String as_path(Nan::To<v8::String>(info[0]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_as_path = (const char *) malloc(as_path.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_as_path, *as_path, as_path.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_as_path) + as_path.length()), 0, 1);
// end convert_from_v8 block
          baton->as_path = from_as_path;
// start convert_from_v8 block
  git_blob_filter_options * from_opts = NULL;
    if (info[1]->IsObject()) {
from_opts = Nan::ObjectWrap::Unwrap<GitBlobFilterOptions>(Nan::To<v8::Object>(info[1]).ToLocalChecked())->GetValue();
  }
  else {
    from_opts = 0;
  }
// end convert_from_v8 block
          baton->opts = from_opts;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[2]));
  FilterWorker *worker = new FilterWorker(baton, callback);

        worker->SaveToPersistent("blob", info.This());
        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("as_path", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("opts", Nan::To<v8::Object>(info[1]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitBlob::FilterWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->out
            ,baton->blob
            ,baton->as_path
            ,baton->opts
    );

    int result = git_blob_filter(
baton->out,baton->blob,baton->as_path,baton->opts  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitBlob::FilterWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
   if (baton->out) {
    to = Nan::New<v8::String>(baton->out->ptr, baton->out->size).ToLocalChecked();
  }
  else {
    to = Nan::Null();
  }
  // end convert_to_v8 block
      v8::Local<v8::Value> result = to;

    v8::Local<v8::Value> argv[2] = {
      Nan::Null(),
      result
    };
    callback->Call(2, argv, async_resource);
  } else {
    if (baton->error) {
      v8::Local<v8::Object> err;
      if (baton->error->message) {
        err = Nan::To<v8::Object>(Nan::Error(baton->error->message)).ToLocalChecked();
      } else {
        err = Nan::To<v8::Object>(Nan::Error("Method filter has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.filter").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("as_path"));
              workerArguments.push(GetFromPersistent("opts"));
      bool callbackFired = false;
      while(!workerArguments.empty()) {
        v8::Local<v8::Value> node = workerArguments.front();
        workerArguments.pop();

        if (
          !node->IsObject()
          || node->IsArray()
          || node->IsBooleanObject()
          || node->IsDate()
          || node->IsFunction()
          || node->IsNumberObject()
          || node->IsRegExp()
          || node->IsStringObject()
        ) {
          continue;
        }

        v8::Local<v8::Object> nodeObj = Nan::To<v8::Object>(node).ToLocalChecked();
        v8::Local<v8::Value> checkValue = GetPrivate(nodeObj, Nan::New("NodeGitPromiseError").ToLocalChecked());

        if (!checkValue.IsEmpty() && !checkValue->IsNull() && !checkValue->IsUndefined()) {
          v8::Local<v8::Value> argv[1] = {
            Nan::To<v8::Object>(checkValue).ToLocalChecked()
          };
          callback->Call(1, argv, async_resource);
          callbackFired = true;
          break;
        }

        v8::Local<v8::Array> properties = Nan::GetPropertyNames(nodeObj).ToLocalChecked();
        for (unsigned int propIndex = 0; propIndex < properties->Length(); ++propIndex) {
          v8::Local<v8::String> propName = Nan::To<v8::String>(Nan::Get(properties, propIndex).ToLocalChecked()).ToLocalChecked();
          v8::Local<v8::Value> nodeToQueue = Nan::Get(nodeObj, propName).ToLocalChecked();
          if (!nodeToQueue->IsUndefined()) {
            workerArguments.push(nodeToQueue);
          }
        }
      }

      if (!callbackFired) {
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method filter has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.filter").ToLocalChecked());
        v8::Local<v8::Value> argv[1] = {
          err
        };
        callback->Call(1, argv, async_resource);
      }
    } else {
      callback->Call(0, NULL, async_resource);
    }

  }

        git_buf_dispose(baton->out);
        free((void *)baton->out);

  delete baton;
}

  
/*
  * @param Blob blob
   * @param String as_path
   * @param Number check_for_binary_data
    * @param Buffer callback
   */
NAN_METHOD(GitBlob::FilteredContent) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Blob blob is required.");
  }

  if (info.Length() == 1 || !info[1]->IsString()) {
    return Nan::ThrowError("String as_path is required.");
  }

  if (info.Length() == 2 || !info[2]->IsNumber()) {
    return Nan::ThrowError("Number check_for_binary_data is required.");
  }

  if (info.Length() == 3 || !info[3]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  FilteredContentBaton* baton = new FilteredContentBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

      baton->out = (git_buf *)malloc(sizeof(git_buf ));
        baton->out->ptr = NULL;
        baton->out->size = baton->out->asize = 0;
// start convert_from_v8 block
  git_blob * from_blob = NULL;
from_blob = Nan::ObjectWrap::Unwrap<GitBlob>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->blob = from_blob;
// start convert_from_v8 block
  const char * from_as_path = NULL;

  Nan::Utf8String as_path(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_as_path = (const char *) malloc(as_path.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_as_path, *as_path, as_path.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_as_path) + as_path.length()), 0, 1);
// end convert_from_v8 block
          baton->as_path = from_as_path;
// start convert_from_v8 block
  int from_check_for_binary_data;
      from_check_for_binary_data = (int)   info[2].As<v8::Number>()->Value();
// end convert_from_v8 block
          baton->check_for_binary_data = from_check_for_binary_data;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[3]));
  FilteredContentWorker *worker = new FilteredContentWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("blob", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("as_path", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("check_for_binary_data", Nan::To<v8::Object>(info[2]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitBlob::FilteredContentWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->out
            ,baton->blob
            ,baton->as_path
    );

    int result = git_blob_filtered_content(
baton->out,baton->blob,baton->as_path,baton->check_for_binary_data  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitBlob::FilteredContentWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
   if (baton->out) {
    to = Nan::New<v8::String>(baton->out->ptr, baton->out->size).ToLocalChecked();
  }
  else {
    to = Nan::Null();
  }
  // end convert_to_v8 block
      v8::Local<v8::Value> result = to;

    v8::Local<v8::Value> argv[2] = {
      Nan::Null(),
      result
    };
    callback->Call(2, argv, async_resource);
  } else {
    if (baton->error) {
      v8::Local<v8::Object> err;
      if (baton->error->message) {
        err = Nan::To<v8::Object>(Nan::Error(baton->error->message)).ToLocalChecked();
      } else {
        err = Nan::To<v8::Object>(Nan::Error("Method filteredContent has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.filteredContent").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("blob"));
              workerArguments.push(GetFromPersistent("as_path"));
              workerArguments.push(GetFromPersistent("check_for_binary_data"));
      bool callbackFired = false;
      while(!workerArguments.empty()) {
        v8::Local<v8::Value> node = workerArguments.front();
        workerArguments.pop();

        if (
          !node->IsObject()
          || node->IsArray()
          || node->IsBooleanObject()
          || node->IsDate()
          || node->IsFunction()
          || node->IsNumberObject()
          || node->IsRegExp()
          || node->IsStringObject()
        ) {
          continue;
        }

        v8::Local<v8::Object> nodeObj = Nan::To<v8::Object>(node).ToLocalChecked();
        v8::Local<v8::Value> checkValue = GetPrivate(nodeObj, Nan::New("NodeGitPromiseError").ToLocalChecked());

        if (!checkValue.IsEmpty() && !checkValue->IsNull() && !checkValue->IsUndefined()) {
          v8::Local<v8::Value> argv[1] = {
            Nan::To<v8::Object>(checkValue).ToLocalChecked()
          };
          callback->Call(1, argv, async_resource);
          callbackFired = true;
          break;
        }

        v8::Local<v8::Array> properties = Nan::GetPropertyNames(nodeObj).ToLocalChecked();
        for (unsigned int propIndex = 0; propIndex < properties->Length(); ++propIndex) {
          v8::Local<v8::String> propName = Nan::To<v8::String>(Nan::Get(properties, propIndex).ToLocalChecked()).ToLocalChecked();
          v8::Local<v8::Value> nodeToQueue = Nan::Get(nodeObj, propName).ToLocalChecked();
          if (!nodeToQueue->IsUndefined()) {
            workerArguments.push(nodeToQueue);
          }
        }
      }

      if (!callbackFired) {
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method filteredContent has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.filteredContent").ToLocalChecked());
        v8::Local<v8::Value> argv[1] = {
          err
        };
        callback->Call(1, argv, async_resource);
      }
    } else {
      callback->Call(0, NULL, async_resource);
    }

  }

        git_buf_dispose(baton->out);
        free((void *)baton->out);

  delete baton;
}

   
/*
     * @return Oid  result    */
NAN_METHOD(GitBlob::Id) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitBlob>(info.This())->GetValue()
    );

 const git_oid * result =     git_blob_id(
          Nan::ObjectWrap::Unwrap<GitBlob>(info.This())->GetValue()
    );

        // null checks on pointers
        if (!result) {
          return info.GetReturnValue().Set(scope.Escape(Nan::Undefined()));
        }

      v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (result != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
            Nan::Set(owners, owners->Length(), info.This());
          to = GitOid::New(
        result,
        true
          , owners
       );
   }
  else {
    to = Nan::Null();
  }
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
   
/*
     * @return Number  result    */
NAN_METHOD(GitBlob::IsBinary) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitBlob>(info.This())->GetValue()
    );

 int result =     git_blob_is_binary(
          Nan::ObjectWrap::Unwrap<GitBlob>(info.This())->GetValue()
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
  
/*
  * @param Repository repo
   * @param Oid id
    * @param Blob callback
   */
NAN_METHOD(GitBlob::Lookup) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1
    || (!info[1]->IsObject() && !info[1]->IsString())) {
    return Nan::ThrowError("Oid id is required.");
  }
  if (info.Length() == 2 || !info[2]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  LookupBaton* baton = new LookupBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  const git_oid * from_id = NULL;
  if (info[1]->IsString()) {
    // Try and parse in a string to a git_oid
    Nan::Utf8String oidString(Nan::To<v8::String>(info[1]).ToLocalChecked());
    git_oid *oidOut = (git_oid *)malloc(sizeof(git_oid));

    if (git_oid_fromstr(oidOut, (const char *) strdup(*oidString)) != GIT_OK) {
      free(oidOut);

      if (git_error_last()) {
        return Nan::ThrowError(git_error_last()->message);
      } else {
        return Nan::ThrowError("Unknown Error");
      }
    }

    from_id = oidOut;
  }
  else {
from_id = Nan::ObjectWrap::Unwrap<GitOid>(Nan::To<v8::Object>(info[1]).ToLocalChecked())->GetValue();
  }
// end convert_from_v8 block
          baton->id = from_id;
            baton->idNeedsFree = info[1]->IsString();

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[2]));
  LookupWorker *worker = new LookupWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("id", Nan::To<v8::Object>(info[1]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitBlob::LookupWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->id
    );

    int result = git_blob_lookup(
&baton->blob,baton->repo,baton->id  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitBlob::LookupWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->blob != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_blob_owner(baton->blob),
            true
          )).ToLocalChecked()
        );
         to = GitBlob::New(
        baton->blob,
        true
          , owners
       );
   }
  else {
    to = Nan::Null();
  }
  // end convert_to_v8 block
      v8::Local<v8::Value> result = to;

    v8::Local<v8::Value> argv[2] = {
      Nan::Null(),
      result
    };
    callback->Call(2, argv, async_resource);
  } else {
    if (baton->error) {
      v8::Local<v8::Object> err;
      if (baton->error->message) {
        err = Nan::To<v8::Object>(Nan::Error(baton->error->message)).ToLocalChecked();
      } else {
        err = Nan::To<v8::Object>(Nan::Error("Method lookup has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.lookup").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("repo"));
              workerArguments.push(GetFromPersistent("id"));
      bool callbackFired = false;
      while(!workerArguments.empty()) {
        v8::Local<v8::Value> node = workerArguments.front();
        workerArguments.pop();

        if (
          !node->IsObject()
          || node->IsArray()
          || node->IsBooleanObject()
          || node->IsDate()
          || node->IsFunction()
          || node->IsNumberObject()
          || node->IsRegExp()
          || node->IsStringObject()
        ) {
          continue;
        }

        v8::Local<v8::Object> nodeObj = Nan::To<v8::Object>(node).ToLocalChecked();
        v8::Local<v8::Value> checkValue = GetPrivate(nodeObj, Nan::New("NodeGitPromiseError").ToLocalChecked());

        if (!checkValue.IsEmpty() && !checkValue->IsNull() && !checkValue->IsUndefined()) {
          v8::Local<v8::Value> argv[1] = {
            Nan::To<v8::Object>(checkValue).ToLocalChecked()
          };
          callback->Call(1, argv, async_resource);
          callbackFired = true;
          break;
        }

        v8::Local<v8::Array> properties = Nan::GetPropertyNames(nodeObj).ToLocalChecked();
        for (unsigned int propIndex = 0; propIndex < properties->Length(); ++propIndex) {
          v8::Local<v8::String> propName = Nan::To<v8::String>(Nan::Get(properties, propIndex).ToLocalChecked()).ToLocalChecked();
          v8::Local<v8::Value> nodeToQueue = Nan::Get(nodeObj, propName).ToLocalChecked();
          if (!nodeToQueue->IsUndefined()) {
            workerArguments.push(nodeToQueue);
          }
        }
      }

      if (!callbackFired) {
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method lookup has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.lookup").ToLocalChecked());
        v8::Local<v8::Value> argv[1] = {
          err
        };
        callback->Call(1, argv, async_resource);
      }
    } else {
      callback->Call(0, NULL, async_resource);
    }

  }

      if (baton->idNeedsFree) {
        baton->idNeedsFree = false;
        free((void *)baton->id);
      }

  delete baton;
}

  
/*
  * @param Repository repo
   * @param Oid id
   * @param Number len
    * @param Blob callback
   */
NAN_METHOD(GitBlob::LookupPrefix) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1
    || (!info[1]->IsObject() && !info[1]->IsString())) {
    return Nan::ThrowError("Oid id is required.");
  }
  if (info.Length() == 2 || !info[2]->IsNumber()) {
    return Nan::ThrowError("Number len is required.");
  }

  if (info.Length() == 3 || !info[3]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  LookupPrefixBaton* baton = new LookupPrefixBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  const git_oid * from_id = NULL;
  if (info[1]->IsString()) {
    // Try and parse in a string to a git_oid
    Nan::Utf8String oidString(Nan::To<v8::String>(info[1]).ToLocalChecked());
    git_oid *oidOut = (git_oid *)malloc(sizeof(git_oid));

    if (git_oid_fromstr(oidOut, (const char *) strdup(*oidString)) != GIT_OK) {
      free(oidOut);

      if (git_error_last()) {
        return Nan::ThrowError(git_error_last()->message);
      } else {
        return Nan::ThrowError("Unknown Error");
      }
    }

    from_id = oidOut;
  }
  else {
from_id = Nan::ObjectWrap::Unwrap<GitOid>(Nan::To<v8::Object>(info[1]).ToLocalChecked())->GetValue();
  }
// end convert_from_v8 block
          baton->id = from_id;
            baton->idNeedsFree = info[1]->IsString();
// start convert_from_v8 block
  size_t from_len;
      from_len = (size_t)   info[2].As<v8::Number>()->Value();
// end convert_from_v8 block
          baton->len = from_len;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[3]));
  LookupPrefixWorker *worker = new LookupPrefixWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("id", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("len", Nan::To<v8::Object>(info[2]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitBlob::LookupPrefixWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->id
    );

    int result = git_blob_lookup_prefix(
&baton->blob,baton->repo,baton->id,baton->len  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitBlob::LookupPrefixWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->blob != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_blob_owner(baton->blob),
            true
          )).ToLocalChecked()
        );
         to = GitBlob::New(
        baton->blob,
        true
          , owners
       );
   }
  else {
    to = Nan::Null();
  }
  // end convert_to_v8 block
      v8::Local<v8::Value> result = to;

    v8::Local<v8::Value> argv[2] = {
      Nan::Null(),
      result
    };
    callback->Call(2, argv, async_resource);
  } else {
    if (baton->error) {
      v8::Local<v8::Object> err;
      if (baton->error->message) {
        err = Nan::To<v8::Object>(Nan::Error(baton->error->message)).ToLocalChecked();
      } else {
        err = Nan::To<v8::Object>(Nan::Error("Method lookupPrefix has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.lookupPrefix").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("repo"));
              workerArguments.push(GetFromPersistent("id"));
              workerArguments.push(GetFromPersistent("len"));
      bool callbackFired = false;
      while(!workerArguments.empty()) {
        v8::Local<v8::Value> node = workerArguments.front();
        workerArguments.pop();

        if (
          !node->IsObject()
          || node->IsArray()
          || node->IsBooleanObject()
          || node->IsDate()
          || node->IsFunction()
          || node->IsNumberObject()
          || node->IsRegExp()
          || node->IsStringObject()
        ) {
          continue;
        }

        v8::Local<v8::Object> nodeObj = Nan::To<v8::Object>(node).ToLocalChecked();
        v8::Local<v8::Value> checkValue = GetPrivate(nodeObj, Nan::New("NodeGitPromiseError").ToLocalChecked());

        if (!checkValue.IsEmpty() && !checkValue->IsNull() && !checkValue->IsUndefined()) {
          v8::Local<v8::Value> argv[1] = {
            Nan::To<v8::Object>(checkValue).ToLocalChecked()
          };
          callback->Call(1, argv, async_resource);
          callbackFired = true;
          break;
        }

        v8::Local<v8::Array> properties = Nan::GetPropertyNames(nodeObj).ToLocalChecked();
        for (unsigned int propIndex = 0; propIndex < properties->Length(); ++propIndex) {
          v8::Local<v8::String> propName = Nan::To<v8::String>(Nan::Get(properties, propIndex).ToLocalChecked()).ToLocalChecked();
          v8::Local<v8::Value> nodeToQueue = Nan::Get(nodeObj, propName).ToLocalChecked();
          if (!nodeToQueue->IsUndefined()) {
            workerArguments.push(nodeToQueue);
          }
        }
      }

      if (!callbackFired) {
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method lookupPrefix has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Blob.lookupPrefix").ToLocalChecked());
        v8::Local<v8::Value> argv[1] = {
          err
        };
        callback->Call(1, argv, async_resource);
      }
    } else {
      callback->Call(0, NULL, async_resource);
    }

  }

      if (baton->idNeedsFree) {
        baton->idNeedsFree = false;
        free((void *)baton->id);
      }

  delete baton;
}

   
/*
     * @return Repository  result    */
NAN_METHOD(GitBlob::Owner) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitBlob>(info.This())->GetValue()
    );

 git_repository * result =     git_blob_owner(
          Nan::ObjectWrap::Unwrap<GitBlob>(info.This())->GetValue()
    );

        // null checks on pointers
        if (!result) {
          return info.GetReturnValue().Set(scope.Escape(Nan::Undefined()));
        }

      v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (result != NULL) {
        to = GitRepository::New(
        result,
        true
       );
   }
  else {
    to = Nan::Null();
  }
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
   
/*
     * @return Buffer  result    */
NAN_METHOD(GitBlob::Rawcontent) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitBlob>(info.This())->GetValue()
    );

 const void * result =     git_blob_rawcontent(
          Nan::ObjectWrap::Unwrap<GitBlob>(info.This())->GetValue()
    );

        // null checks on pointers
        if (!result) {
          return info.GetReturnValue().Set(scope.Escape(Nan::Undefined()));
        }

      v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (result != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
            Nan::Set(owners, owners->Length(), info.This());
         to = Wrapper::New(result);
   }
  else {
    to = Nan::Null();
  }
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
   
/*
     * @return Number  result    */
NAN_METHOD(GitBlob::Rawsize) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitBlob>(info.This())->GetValue()
    );

 git_object_size_t result =     git_blob_rawsize(
          Nan::ObjectWrap::Unwrap<GitBlob>(info.This())->GetValue()
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
    // force base class template instantiation, to make sure we get all the
// methods, statics, etc.
template class NodeGitWrapper<GitBlobTraits>;
 