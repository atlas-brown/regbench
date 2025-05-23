// This is a generated file, modify: generate/templates/templates/class_content.cc

#include <nan.h>
#include <string.h>

extern "C" {
  #include <git2.h>
    #include <git2/sys/diff.h>
 }

#include "../include/nodegit.h"
#include "../include/lock_master.h"
#include "../include/functions/copy.h"
#include "../include/diff.h"
#include "nodegit_wrapper.cc"
#include "../include/async_libgit2_queue_worker.h"

  #include "../include/blob.h"
  #include "../include/diff_options.h"
  #include "../include/diff_delta.h"
  #include "../include/diff_binary.h"
  #include "../include/diff_hunk.h"
  #include "../include/diff_line.h"
  #include "../include/diff_find_options.h"
  #include "../include/diff_stats.h"
  #include "../include/repository.h"
  #include "../include/index.h"
  #include "../include/oid.h"
  #include "../include/diff_patchid_options.h"
  #include "../include/buf.h"
  #include "../include/tree.h"
  #include "../include/diff_perfdata.h"
 
#include <iostream>

using namespace std;
using namespace v8;
using namespace node;

  GitDiff::~GitDiff() {
    // this will cause an error if you have a non-self-freeing object that also needs
    // to save values. Since the object that will eventually free the object has no
    // way of knowing to free these values.
                                                                                                }

  void GitDiff::InitializeComponent(v8::Local<v8::Object> target) {
    Nan::HandleScope scope;

    v8::Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(JSNewFunction);

    tpl->InstanceTemplate()->SetInternalFieldCount(1);
    tpl->SetClassName(Nan::New("Diff").ToLocalChecked());

           Nan::SetMethod(tpl, "blobToBuffer", BlobToBuffer);
            Nan::SetPrototypeMethod(tpl, "findSimilar", FindSimilar);
             Nan::SetMethod(tpl, "fromBuffer", FromBuffer);
            Nan::SetPrototypeMethod(tpl, "getDelta", GetDelta);
            Nan::SetPrototypeMethod(tpl, "getStats", GetStats);
             Nan::SetMethod(tpl, "indexToIndex", IndexToIndex);
             Nan::SetMethod(tpl, "indexToWorkdir", IndexToWorkdir);
            Nan::SetPrototypeMethod(tpl, "isSortedIcase", IsSortedIcase);
            Nan::SetPrototypeMethod(tpl, "merge", Merge);
            Nan::SetPrototypeMethod(tpl, "numDeltas", NumDeltas);
            Nan::SetPrototypeMethod(tpl, "patchid", Patchid);
            Nan::SetPrototypeMethod(tpl, "toBuf", ToBuf);
             Nan::SetMethod(tpl, "treeToIndex", TreeToIndex);
             Nan::SetMethod(tpl, "treeToTree", TreeToTree);
             Nan::SetMethod(tpl, "treeToWorkdir", TreeToWorkdir);
             Nan::SetMethod(tpl, "treeToWorkdirWithIndex", TreeToWorkdirWithIndex);
            Nan::SetPrototypeMethod(tpl, "getPerfdata", GetPerfdata);
    
    InitializeTemplate(tpl);

    v8::Local<Function> _constructor_template = Nan::GetFunction(tpl).ToLocalChecked();
    constructor_template.Reset(_constructor_template);
    Nan::Set(target, Nan::New("Diff").ToLocalChecked(), _constructor_template);
  }

 
/*
 * @param Blob old_blob
   * @param String old_as_path
   * @param String buffer
   * @param Number buffer_len
   * @param String buffer_as_path
   * @param DiffOptions options
   * @param DiffFileCb file_cb
   * @param DiffBinaryCb binary_cb
   * @param DiffHunkCb hunk_cb
   * @param DiffLineCb line_cb
   * @param Void payload
     */
NAN_METHOD(GitDiff::BlobToBuffer) {

  if (info.Length() == 11 || !info[11]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  BlobToBufferBaton* baton = new BlobToBufferBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

      BlobToBuffer_globalPayload* globalPayload = new BlobToBuffer_globalPayload;
// start convert_from_v8 block
  const git_blob * from_old_blob = NULL;
    if (info[0]->IsObject()) {
from_old_blob = Nan::ObjectWrap::Unwrap<GitBlob>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
  }
  else {
    from_old_blob = 0;
  }
// end convert_from_v8 block
          baton->old_blob = from_old_blob;
// start convert_from_v8 block
  const char * from_old_as_path = NULL;
    if (info[1]->IsString()) {

  Nan::Utf8String old_as_path(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_old_as_path = (const char *) malloc(old_as_path.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_old_as_path, *old_as_path, old_as_path.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_old_as_path) + old_as_path.length()), 0, 1);
  }
  else {
    from_old_as_path = 0;
  }
// end convert_from_v8 block
          baton->old_as_path = from_old_as_path;
// start convert_from_v8 block
  const char * from_buffer = NULL;
    if (info[2]->IsString()) {

  Nan::Utf8String buffer(Nan::To<v8::String>(info[2]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_buffer = (const char *) malloc(buffer.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_buffer, *buffer, buffer.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_buffer) + buffer.length()), 0, 1);
  }
  else {
    from_buffer = 0;
  }
// end convert_from_v8 block
          baton->buffer = from_buffer;
// start convert_from_v8 block
  size_t from_buffer_len;
    if (info[3]->IsNumber()) {
      from_buffer_len = (size_t)   info[3].As<v8::Number>()->Value();
  }
  else {
    from_buffer_len = 0;
  }
// end convert_from_v8 block
          baton->buffer_len = from_buffer_len;
// start convert_from_v8 block
  const char * from_buffer_as_path = NULL;
    if (info[4]->IsString()) {

  Nan::Utf8String buffer_as_path(Nan::To<v8::String>(info[4]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_buffer_as_path = (const char *) malloc(buffer_as_path.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_buffer_as_path, *buffer_as_path, buffer_as_path.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_buffer_as_path) + buffer_as_path.length()), 0, 1);
  }
  else {
    from_buffer_as_path = 0;
  }
// end convert_from_v8 block
          baton->buffer_as_path = from_buffer_as_path;
// start convert_from_v8 block
  const git_diff_options * from_options = NULL;
    if (info[5]->IsObject()) {
from_options = Nan::ObjectWrap::Unwrap<GitDiffOptions>(Nan::To<v8::Object>(info[5]).ToLocalChecked())->GetValue();
  }
  else {
    from_options = 0;
  }
// end convert_from_v8 block
          baton->options = from_options;
        if (!info[6]->IsFunction()) {
          baton->file_cb = NULL;
          globalPayload->file_cb = NULL;
        }
        else {
          baton->file_cb = BlobToBuffer_file_cb_cppCallback;
            globalPayload->file_cb = new Nan::Callback(info[6].As<Function>());
        }
        if (!info[7]->IsFunction()) {
          baton->binary_cb = NULL;
          globalPayload->binary_cb = NULL;
        }
        else {
          baton->binary_cb = BlobToBuffer_binary_cb_cppCallback;
            globalPayload->binary_cb = new Nan::Callback(info[7].As<Function>());
        }
        if (!info[8]->IsFunction()) {
          baton->hunk_cb = NULL;
          globalPayload->hunk_cb = NULL;
        }
        else {
          baton->hunk_cb = BlobToBuffer_hunk_cb_cppCallback;
            globalPayload->hunk_cb = new Nan::Callback(info[8].As<Function>());
        }
        if (!info[9]->IsFunction()) {
          baton->line_cb = NULL;
          globalPayload->line_cb = NULL;
        }
        else {
          baton->line_cb = BlobToBuffer_line_cb_cppCallback;
            globalPayload->line_cb = new Nan::Callback(info[9].As<Function>());
        }
          baton->payload = globalPayload;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[11]));
  BlobToBufferWorker *worker = new BlobToBufferWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("old_blob", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("old_as_path", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("buffer", Nan::To<v8::Object>(info[2]).ToLocalChecked());
        if (!info[3]->IsUndefined() && !info[3]->IsNull())
          worker->SaveToPersistent("buffer_len", Nan::To<v8::Object>(info[3]).ToLocalChecked());
        if (!info[4]->IsUndefined() && !info[4]->IsNull())
          worker->SaveToPersistent("buffer_as_path", Nan::To<v8::Object>(info[4]).ToLocalChecked());
        if (!info[5]->IsUndefined() && !info[5]->IsNull())
          worker->SaveToPersistent("options", Nan::To<v8::Object>(info[5]).ToLocalChecked());
        if (!info[10]->IsUndefined() && !info[10]->IsNull())
          worker->SaveToPersistent("payload", Nan::To<v8::Object>(info[10]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitDiff::BlobToBufferWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->old_blob
            ,baton->old_as_path
            ,baton->buffer
            ,baton->buffer_as_path
            ,baton->options
            ,baton->payload
    );

    int result = git_diff_blob_to_buffer(
baton->old_blob,baton->old_as_path,baton->buffer,baton->buffer_len,baton->buffer_as_path,baton->options,baton->file_cb,baton->binary_cb,baton->hunk_cb,baton->line_cb,baton->payload  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitDiff::BlobToBufferWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> result = Nan::Undefined();

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
        err = Nan::To<v8::Object>(Nan::Error("Method blobToBuffer has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.blobToBuffer").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("old_blob"));
              workerArguments.push(GetFromPersistent("old_as_path"));
              workerArguments.push(GetFromPersistent("buffer"));
              workerArguments.push(GetFromPersistent("buffer_len"));
              workerArguments.push(GetFromPersistent("buffer_as_path"));
              workerArguments.push(GetFromPersistent("options"));
              workerArguments.push(GetFromPersistent("payload"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method blobToBuffer has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.blobToBuffer").ToLocalChecked());
        v8::Local<v8::Value> argv[1] = {
          err
        };
        callback->Call(1, argv, async_resource);
      }
    } else {
      callback->Call(0, NULL, async_resource);
    }

  }

      delete (BlobToBuffer_globalPayload*)baton->payload;

  delete baton;
}


int GitDiff::BlobToBuffer_file_cb_cppCallback (
    const git_diff_delta * delta,     float progress,     void * payload  ) {
  BlobToBuffer_FileCbBaton baton(1);

    baton.delta = delta;
    baton.progress = progress;
    baton.payload = payload;
 
  return baton.ExecuteAsync(BlobToBuffer_file_cb_async);
}

void GitDiff::BlobToBuffer_file_cb_async(void *untypedBaton) {
  Nan::HandleScope scope;

  BlobToBuffer_FileCbBaton* baton = static_cast<BlobToBuffer_FileCbBaton*>(untypedBaton);

    Nan::Callback* callback = ((BlobToBuffer_globalPayload*)baton->payload)->file_cb;
   
  v8::Local<Value> argv[2] = {
         GitDiffDelta::New(baton->delta, false)
 ,           Nan::New(baton->progress)
    };

  Nan::TryCatch tryCatch;
  // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
  Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*callback, 2, argv);
  v8::Local<v8::Value> result;
  if (!maybeResult.IsEmpty()) {
    result = maybeResult.ToLocalChecked();
  }

  if(PromiseCompletion::ForwardIfPromise(result, baton, BlobToBuffer_file_cb_promiseCompleted)) {
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

void GitDiff::BlobToBuffer_file_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
  Nan::HandleScope scope;

  BlobToBuffer_FileCbBaton* baton = static_cast<BlobToBuffer_FileCbBaton*>(_baton);

  if (isFulfilled) {
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
   }
  else {
    // promise was rejected
    GitDiff* instance = static_cast<GitDiff*>(baton->  payload  );
    v8::Local<v8::Object> parent = instance->handle();
    SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

    baton->result = -1;
  }
  baton->Done();
}

int GitDiff::BlobToBuffer_binary_cb_cppCallback (
    const git_diff_delta * delta,     const git_diff_binary * binary,     void * payload  ) {
  BlobToBuffer_BinaryCbBaton baton(0);

    baton.delta = delta;
    baton.binary = binary;
    baton.payload = payload;
 
  return baton.ExecuteAsync(BlobToBuffer_binary_cb_async);
}

void GitDiff::BlobToBuffer_binary_cb_async(void *untypedBaton) {
  Nan::HandleScope scope;

  BlobToBuffer_BinaryCbBaton* baton = static_cast<BlobToBuffer_BinaryCbBaton*>(untypedBaton);

    Nan::Callback* callback = ((BlobToBuffer_globalPayload*)baton->payload)->binary_cb;
   
  v8::Local<Value> argv[2] = {
         GitDiffDelta::New(baton->delta, false)
 ,          GitDiffBinary::New(baton->binary, false)
    };

  Nan::TryCatch tryCatch;
  // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
  Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*callback, 2, argv);
  v8::Local<v8::Value> result;
  if (!maybeResult.IsEmpty()) {
    result = maybeResult.ToLocalChecked();
  }

  if(PromiseCompletion::ForwardIfPromise(result, baton, BlobToBuffer_binary_cb_promiseCompleted)) {
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

void GitDiff::BlobToBuffer_binary_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
  Nan::HandleScope scope;

  BlobToBuffer_BinaryCbBaton* baton = static_cast<BlobToBuffer_BinaryCbBaton*>(_baton);

  if (isFulfilled) {
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
   }
  else {
    // promise was rejected
    GitDiff* instance = static_cast<GitDiff*>(baton->  payload  );
    v8::Local<v8::Object> parent = instance->handle();
    SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

    baton->result = -1;
  }
  baton->Done();
}

int GitDiff::BlobToBuffer_hunk_cb_cppCallback (
    const git_diff_delta * delta,     const git_diff_hunk * hunk,     void * payload  ) {
  BlobToBuffer_HunkCbBaton baton(1);

    baton.delta = delta;
    baton.hunk = hunk;
    baton.payload = payload;
 
  return baton.ExecuteAsync(BlobToBuffer_hunk_cb_async);
}

void GitDiff::BlobToBuffer_hunk_cb_async(void *untypedBaton) {
  Nan::HandleScope scope;

  BlobToBuffer_HunkCbBaton* baton = static_cast<BlobToBuffer_HunkCbBaton*>(untypedBaton);

    Nan::Callback* callback = ((BlobToBuffer_globalPayload*)baton->payload)->hunk_cb;
   
  v8::Local<Value> argv[2] = {
         GitDiffDelta::New(baton->delta, false)
 ,          GitDiffHunk::New(baton->hunk, false)
    };

  Nan::TryCatch tryCatch;
  // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
  Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*callback, 2, argv);
  v8::Local<v8::Value> result;
  if (!maybeResult.IsEmpty()) {
    result = maybeResult.ToLocalChecked();
  }

  if(PromiseCompletion::ForwardIfPromise(result, baton, BlobToBuffer_hunk_cb_promiseCompleted)) {
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

void GitDiff::BlobToBuffer_hunk_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
  Nan::HandleScope scope;

  BlobToBuffer_HunkCbBaton* baton = static_cast<BlobToBuffer_HunkCbBaton*>(_baton);

  if (isFulfilled) {
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
   }
  else {
    // promise was rejected
    GitDiff* instance = static_cast<GitDiff*>(baton->  payload  );
    v8::Local<v8::Object> parent = instance->handle();
    SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

    baton->result = -1;
  }
  baton->Done();
}

int GitDiff::BlobToBuffer_line_cb_cppCallback (
    const git_diff_delta * delta,     const git_diff_hunk * hunk,     const git_diff_line * line,     void * payload  ) {
  BlobToBuffer_LineCbBaton baton(1);

    baton.delta = delta;
    baton.hunk = hunk;
    baton.line = line;
    baton.payload = payload;
 
  return baton.ExecuteAsync(BlobToBuffer_line_cb_async);
}

void GitDiff::BlobToBuffer_line_cb_async(void *untypedBaton) {
  Nan::HandleScope scope;

  BlobToBuffer_LineCbBaton* baton = static_cast<BlobToBuffer_LineCbBaton*>(untypedBaton);

     Nan::Callback* callback = ((BlobToBuffer_globalPayload*)baton->payload)->line_cb;
   
  v8::Local<Value> argv[3] = {
         GitDiffDelta::New(baton->delta, false)
 ,          GitDiffHunk::New(baton->hunk, false)
 ,          GitDiffLine::New(baton->line, false)
    };

  Nan::TryCatch tryCatch;
  // TODO This should take an async_resource, but we will need to figure out how to pipe the correct context into this
  Nan::MaybeLocal<v8::Value> maybeResult = Nan::Call(*callback, 3, argv);
  v8::Local<v8::Value> result;
  if (!maybeResult.IsEmpty()) {
    result = maybeResult.ToLocalChecked();
  }

  if(PromiseCompletion::ForwardIfPromise(result, baton, BlobToBuffer_line_cb_promiseCompleted)) {
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

void GitDiff::BlobToBuffer_line_cb_promiseCompleted(bool isFulfilled, AsyncBaton *_baton, v8::Local<v8::Value> result) {
  Nan::HandleScope scope;

  BlobToBuffer_LineCbBaton* baton = static_cast<BlobToBuffer_LineCbBaton*>(_baton);

  if (isFulfilled) {
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
   }
  else {
    // promise was rejected
    GitDiff* instance = static_cast<GitDiff*>(baton->   payload  );
    v8::Local<v8::Object> parent = instance->handle();
    SetPrivate(parent, Nan::New("NodeGitPromiseError").ToLocalChecked(), result);

    baton->result = -1;
  }
  baton->Done();
}
  
/*
   * @param DiffFindOptions options
     */
NAN_METHOD(GitDiff::FindSimilar) {

  if (info.Length() == 1 || !info[1]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  FindSimilarBaton* baton = new FindSimilarBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

        baton->diff = Nan::ObjectWrap::Unwrap<GitDiff>(info.This())->GetValue();
// start convert_from_v8 block
  const git_diff_find_options * from_options = NULL;
    if (info[0]->IsObject()) {
from_options = Nan::ObjectWrap::Unwrap<GitDiffFindOptions>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
  }
  else {
    from_options = 0;
  }
// end convert_from_v8 block
          baton->options = from_options;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[1]));
  FindSimilarWorker *worker = new FindSimilarWorker(baton, callback);

        worker->SaveToPersistent("diff", info.This());
        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("options", Nan::To<v8::Object>(info[0]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitDiff::FindSimilarWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->diff
            ,baton->options
    );

    int result = git_diff_find_similar(
baton->diff,baton->options  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitDiff::FindSimilarWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> result = Nan::Undefined();

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
        err = Nan::To<v8::Object>(Nan::Error("Method findSimilar has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.findSimilar").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("options"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method findSimilar has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.findSimilar").ToLocalChecked());
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
  * @param String content
   * @param Number content_len
    * @param Diff callback
   */
NAN_METHOD(GitDiff::FromBuffer) {

  if (info.Length() == 0 || !info[0]->IsString()) {
    return Nan::ThrowError("String content is required.");
  }

  if (info.Length() == 1 || !info[1]->IsNumber()) {
    return Nan::ThrowError("Number content_len is required.");
  }

  if (info.Length() == 2 || !info[2]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  FromBufferBaton* baton = new FromBufferBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  const char * from_content = NULL;

  Nan::Utf8String content(Nan::To<v8::String>(info[0]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_content = (const char *) malloc(content.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_content, *content, content.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_content) + content.length()), 0, 1);
// end convert_from_v8 block
          baton->content = from_content;
// start convert_from_v8 block
  size_t from_content_len;
      from_content_len = (size_t)   info[1].As<v8::Number>()->Value();
// end convert_from_v8 block
          baton->content_len = from_content_len;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[2]));
  FromBufferWorker *worker = new FromBufferWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("content", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("content_len", Nan::To<v8::Object>(info[1]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitDiff::FromBufferWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->content
    );

    int result = git_diff_from_buffer(
&baton->out,baton->content,baton->content_len  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitDiff::FromBufferWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
        to = GitDiff::New(
        baton->out,
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
        err = Nan::To<v8::Object>(Nan::Error("Method fromBuffer has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.fromBuffer").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("content"));
              workerArguments.push(GetFromPersistent("content_len"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method fromBuffer has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.fromBuffer").ToLocalChecked());
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
   * @param Number idx
     * @return DiffDelta  result    */
NAN_METHOD(GitDiff::GetDelta) {
  Nan::EscapableHandleScope scope;

  if (info.Length() == 0 || !info[0]->IsNumber()) {
    return Nan::ThrowError("Number idx is required.");
  }

// start convert_from_v8 block
  size_t from_idx;
      from_idx = (size_t)   info[0].As<v8::Number>()->Value();
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitDiff>(info.This())->GetValue()
    );

 const git_diff_delta * result =     git_diff_get_delta(
          Nan::ObjectWrap::Unwrap<GitDiff>(info.This())->GetValue()
,          from_idx
    );

        // null checks on pointers
        if (!result) {
          return info.GetReturnValue().Set(scope.Escape(Nan::Undefined()));
        }

      v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (result != NULL) {
        to = GitDiffDelta::New(
        result,
        false
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
     * @param DiffStats callback
   */
NAN_METHOD(GitDiff::GetStats) {

  if (info.Length() == 0 || !info[0]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  GetStatsBaton* baton = new GetStatsBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

        baton->diff = Nan::ObjectWrap::Unwrap<GitDiff>(info.This())->GetValue();

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[0]));
  GetStatsWorker *worker = new GetStatsWorker(baton, callback);

        worker->SaveToPersistent("diff", info.This());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitDiff::GetStatsWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->diff
    );

    int result = git_diff_get_stats(
&baton->out,baton->diff  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitDiff::GetStatsWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
            Nan::Set(owners, Nan::New<v8::Number>(owners->Length()), Nan::To<v8::Object>(this->GetFromPersistent("diff")).ToLocalChecked());
             to = GitDiffStats::New(
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
        err = Nan::To<v8::Object>(Nan::Error("Method getStats has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.getStats").ToLocalChecked());
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method getStats has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.getStats").ToLocalChecked());
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
   * @param Index old_index
   * @param Index new_index
   * @param DiffOptions opts
    * @param Diff callback
   */
NAN_METHOD(GitDiff::IndexToIndex) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsObject()) {
    return Nan::ThrowError("Index old_index is required.");
  }

  if (info.Length() == 2 || !info[2]->IsObject()) {
    return Nan::ThrowError("Index new_index is required.");
  }

  if (info.Length() == 3 || !info[3]->IsObject()) {
    return Nan::ThrowError("DiffOptions opts is required.");
  }

  if (info.Length() == 4 || !info[4]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  IndexToIndexBaton* baton = new IndexToIndexBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  git_index * from_old_index = NULL;
from_old_index = Nan::ObjectWrap::Unwrap<GitIndex>(Nan::To<v8::Object>(info[1]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->old_index = from_old_index;
// start convert_from_v8 block
  git_index * from_new_index = NULL;
from_new_index = Nan::ObjectWrap::Unwrap<GitIndex>(Nan::To<v8::Object>(info[2]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->new_index = from_new_index;
// start convert_from_v8 block
  const git_diff_options * from_opts = NULL;
from_opts = Nan::ObjectWrap::Unwrap<GitDiffOptions>(Nan::To<v8::Object>(info[3]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->opts = from_opts;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[4]));
  IndexToIndexWorker *worker = new IndexToIndexWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("old_index", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("new_index", Nan::To<v8::Object>(info[2]).ToLocalChecked());
        if (!info[3]->IsUndefined() && !info[3]->IsNull())
          worker->SaveToPersistent("opts", Nan::To<v8::Object>(info[3]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitDiff::IndexToIndexWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->old_index
            ,baton->new_index
            ,baton->opts
    );

    int result = git_diff_index_to_index(
&baton->diff,baton->repo,baton->old_index,baton->new_index,baton->opts  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitDiff::IndexToIndexWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->diff != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
            Nan::Set(owners, Nan::New<v8::Number>(owners->Length()), Nan::To<v8::Object>(this->GetFromPersistent("repo")).ToLocalChecked());
             to = GitDiff::New(
        baton->diff,
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
        err = Nan::To<v8::Object>(Nan::Error("Method indexToIndex has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.indexToIndex").ToLocalChecked());
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
              workerArguments.push(GetFromPersistent("old_index"));
              workerArguments.push(GetFromPersistent("new_index"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method indexToIndex has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.indexToIndex").ToLocalChecked());
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
   * @param Index index
   * @param DiffOptions opts
    * @param Diff callback
   */
NAN_METHOD(GitDiff::IndexToWorkdir) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 3 || !info[3]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  IndexToWorkdirBaton* baton = new IndexToWorkdirBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  git_index * from_index = NULL;
    if (info[1]->IsObject()) {
from_index = Nan::ObjectWrap::Unwrap<GitIndex>(Nan::To<v8::Object>(info[1]).ToLocalChecked())->GetValue();
  }
  else {
    from_index = 0;
  }
// end convert_from_v8 block
          baton->index = from_index;
// start convert_from_v8 block
  const git_diff_options * from_opts = NULL;
    if (info[2]->IsObject()) {
from_opts = Nan::ObjectWrap::Unwrap<GitDiffOptions>(Nan::To<v8::Object>(info[2]).ToLocalChecked())->GetValue();
  }
  else {
    from_opts = 0;
  }
// end convert_from_v8 block
          baton->opts = from_opts;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[3]));
  IndexToWorkdirWorker *worker = new IndexToWorkdirWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("index", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("opts", Nan::To<v8::Object>(info[2]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitDiff::IndexToWorkdirWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->index
            ,baton->opts
    );

    int result = git_diff_index_to_workdir(
&baton->diff,baton->repo,baton->index,baton->opts  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitDiff::IndexToWorkdirWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->diff != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
            Nan::Set(owners, Nan::New<v8::Number>(owners->Length()), Nan::To<v8::Object>(this->GetFromPersistent("repo")).ToLocalChecked());
             to = GitDiff::New(
        baton->diff,
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
        err = Nan::To<v8::Object>(Nan::Error("Method indexToWorkdir has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.indexToWorkdir").ToLocalChecked());
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
              workerArguments.push(GetFromPersistent("index"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method indexToWorkdir has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.indexToWorkdir").ToLocalChecked());
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
     * @return Number  result    */
NAN_METHOD(GitDiff::IsSortedIcase) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitDiff>(info.This())->GetValue()
    );

 int result =     git_diff_is_sorted_icase(
          Nan::ObjectWrap::Unwrap<GitDiff>(info.This())->GetValue()
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
  
/*
   * @param Diff from
     */
NAN_METHOD(GitDiff::Merge) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Diff from is required.");
  }

  if (info.Length() == 1 || !info[1]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  MergeBaton* baton = new MergeBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

        baton->onto = Nan::ObjectWrap::Unwrap<GitDiff>(info.This())->GetValue();
// start convert_from_v8 block
  const git_diff * from_from = NULL;
from_from = Nan::ObjectWrap::Unwrap<GitDiff>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->from = from_from;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[1]));
  MergeWorker *worker = new MergeWorker(baton, callback);

        worker->SaveToPersistent("onto", info.This());
        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("from", Nan::To<v8::Object>(info[0]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitDiff::MergeWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->onto
            ,baton->from
    );

    int result = git_diff_merge(
baton->onto,baton->from  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitDiff::MergeWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> result = Nan::Undefined();

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
        err = Nan::To<v8::Object>(Nan::Error("Method merge has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.merge").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("from"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method merge has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.merge").ToLocalChecked());
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
     * @return Number  result    */
NAN_METHOD(GitDiff::NumDeltas) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitDiff>(info.This())->GetValue()
    );

 size_t result =     git_diff_num_deltas(
          Nan::ObjectWrap::Unwrap<GitDiff>(info.This())->GetValue()
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
  
/*
    * @param DiffPatchidOptions opts
    * @param Oid callback
   */
NAN_METHOD(GitDiff::Patchid) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("DiffPatchidOptions opts is required.");
  }

  if (info.Length() == 1 || !info[1]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  PatchidBaton* baton = new PatchidBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

      baton->out = (git_oid *)malloc(sizeof(git_oid ));
        baton->diff = Nan::ObjectWrap::Unwrap<GitDiff>(info.This())->GetValue();
// start convert_from_v8 block
  git_diff_patchid_options * from_opts = NULL;
from_opts = Nan::ObjectWrap::Unwrap<GitDiffPatchidOptions>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->opts = from_opts;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[1]));
  PatchidWorker *worker = new PatchidWorker(baton, callback);

        worker->SaveToPersistent("diff", info.This());
        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("opts", Nan::To<v8::Object>(info[0]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitDiff::PatchidWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->out
            ,baton->diff
            ,baton->opts
    );

    int result = git_diff_patchid(
baton->out,baton->diff,baton->opts  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitDiff::PatchidWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
        to = GitOid::New(
        baton->out,
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
        err = Nan::To<v8::Object>(Nan::Error("Method patchid has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.patchid").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method patchid has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.patchid").ToLocalChecked());
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
    * @param Number format
    * @param Buf callback
   */
NAN_METHOD(GitDiff::ToBuf) {

  if (info.Length() == 0 || !info[0]->IsNumber()) {
    return Nan::ThrowError("Number format is required.");
  }

  if (info.Length() == 1 || !info[1]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  ToBufBaton* baton = new ToBufBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

      baton->out = (git_buf *)malloc(sizeof(git_buf ));
        baton->out->ptr = NULL;
        baton->out->size = baton->out->asize = 0;
        baton->diff = Nan::ObjectWrap::Unwrap<GitDiff>(info.This())->GetValue();
// start convert_from_v8 block
  git_diff_format_t from_format;
      from_format = (git_diff_format_t)  (int) info[0].As<v8::Number>()->Value();
// end convert_from_v8 block
          baton->format = from_format;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[1]));
  ToBufWorker *worker = new ToBufWorker(baton, callback);

        worker->SaveToPersistent("diff", info.This());
        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("format", Nan::To<v8::Object>(info[0]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitDiff::ToBufWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->out
            ,baton->diff
    );

    int result = git_diff_to_buf(
baton->out,baton->diff,baton->format  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitDiff::ToBufWorker::HandleOKCallback() {
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
        err = Nan::To<v8::Object>(Nan::Error("Method toBuf has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.toBuf").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("format"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method toBuf has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.toBuf").ToLocalChecked());
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
  * @param Repository repo
   * @param Tree old_tree
   * @param Index index
   * @param DiffOptions opts
    * @param Diff callback
   */
NAN_METHOD(GitDiff::TreeToIndex) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 4 || !info[4]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  TreeToIndexBaton* baton = new TreeToIndexBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  git_tree * from_old_tree = NULL;
    if (info[1]->IsObject()) {
from_old_tree = Nan::ObjectWrap::Unwrap<GitTree>(Nan::To<v8::Object>(info[1]).ToLocalChecked())->GetValue();
  }
  else {
    from_old_tree = 0;
  }
// end convert_from_v8 block
          baton->old_tree = from_old_tree;
// start convert_from_v8 block
  git_index * from_index = NULL;
    if (info[2]->IsObject()) {
from_index = Nan::ObjectWrap::Unwrap<GitIndex>(Nan::To<v8::Object>(info[2]).ToLocalChecked())->GetValue();
  }
  else {
    from_index = 0;
  }
// end convert_from_v8 block
          baton->index = from_index;
// start convert_from_v8 block
  const git_diff_options * from_opts = NULL;
    if (info[3]->IsObject()) {
from_opts = Nan::ObjectWrap::Unwrap<GitDiffOptions>(Nan::To<v8::Object>(info[3]).ToLocalChecked())->GetValue();
  }
  else {
    from_opts = 0;
  }
// end convert_from_v8 block
          baton->opts = from_opts;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[4]));
  TreeToIndexWorker *worker = new TreeToIndexWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("old_tree", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("index", Nan::To<v8::Object>(info[2]).ToLocalChecked());
        if (!info[3]->IsUndefined() && !info[3]->IsNull())
          worker->SaveToPersistent("opts", Nan::To<v8::Object>(info[3]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitDiff::TreeToIndexWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->old_tree
            ,baton->index
            ,baton->opts
    );

    int result = git_diff_tree_to_index(
&baton->diff,baton->repo,baton->old_tree,baton->index,baton->opts  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitDiff::TreeToIndexWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->diff != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
            Nan::Set(owners, Nan::New<v8::Number>(owners->Length()), Nan::To<v8::Object>(this->GetFromPersistent("repo")).ToLocalChecked());
             to = GitDiff::New(
        baton->diff,
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
        err = Nan::To<v8::Object>(Nan::Error("Method treeToIndex has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.treeToIndex").ToLocalChecked());
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
              workerArguments.push(GetFromPersistent("old_tree"));
              workerArguments.push(GetFromPersistent("index"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method treeToIndex has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.treeToIndex").ToLocalChecked());
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
   * @param Tree old_tree
   * @param Tree new_tree
   * @param DiffOptions opts
    * @param Diff callback
   */
NAN_METHOD(GitDiff::TreeToTree) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 4 || !info[4]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  TreeToTreeBaton* baton = new TreeToTreeBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  git_tree * from_old_tree = NULL;
    if (info[1]->IsObject()) {
from_old_tree = Nan::ObjectWrap::Unwrap<GitTree>(Nan::To<v8::Object>(info[1]).ToLocalChecked())->GetValue();
  }
  else {
    from_old_tree = 0;
  }
// end convert_from_v8 block
          baton->old_tree = from_old_tree;
// start convert_from_v8 block
  git_tree * from_new_tree = NULL;
    if (info[2]->IsObject()) {
from_new_tree = Nan::ObjectWrap::Unwrap<GitTree>(Nan::To<v8::Object>(info[2]).ToLocalChecked())->GetValue();
  }
  else {
    from_new_tree = 0;
  }
// end convert_from_v8 block
          baton->new_tree = from_new_tree;
// start convert_from_v8 block
  const git_diff_options * from_opts = NULL;
    if (info[3]->IsObject()) {
from_opts = Nan::ObjectWrap::Unwrap<GitDiffOptions>(Nan::To<v8::Object>(info[3]).ToLocalChecked())->GetValue();
  }
  else {
    from_opts = 0;
  }
// end convert_from_v8 block
          baton->opts = from_opts;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[4]));
  TreeToTreeWorker *worker = new TreeToTreeWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("old_tree", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("new_tree", Nan::To<v8::Object>(info[2]).ToLocalChecked());
        if (!info[3]->IsUndefined() && !info[3]->IsNull())
          worker->SaveToPersistent("opts", Nan::To<v8::Object>(info[3]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitDiff::TreeToTreeWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->old_tree
            ,baton->new_tree
            ,baton->opts
    );

    int result = git_diff_tree_to_tree(
&baton->diff,baton->repo,baton->old_tree,baton->new_tree,baton->opts  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitDiff::TreeToTreeWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->diff != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
            Nan::Set(owners, Nan::New<v8::Number>(owners->Length()), Nan::To<v8::Object>(this->GetFromPersistent("repo")).ToLocalChecked());
             to = GitDiff::New(
        baton->diff,
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
        err = Nan::To<v8::Object>(Nan::Error("Method treeToTree has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.treeToTree").ToLocalChecked());
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
              workerArguments.push(GetFromPersistent("old_tree"));
              workerArguments.push(GetFromPersistent("new_tree"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method treeToTree has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.treeToTree").ToLocalChecked());
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
   * @param Tree old_tree
   * @param DiffOptions opts
    * @param Diff callback
   */
NAN_METHOD(GitDiff::TreeToWorkdir) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 3 || !info[3]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  TreeToWorkdirBaton* baton = new TreeToWorkdirBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  git_tree * from_old_tree = NULL;
    if (info[1]->IsObject()) {
from_old_tree = Nan::ObjectWrap::Unwrap<GitTree>(Nan::To<v8::Object>(info[1]).ToLocalChecked())->GetValue();
  }
  else {
    from_old_tree = 0;
  }
// end convert_from_v8 block
          baton->old_tree = from_old_tree;
// start convert_from_v8 block
  const git_diff_options * from_opts = NULL;
    if (info[2]->IsObject()) {
from_opts = Nan::ObjectWrap::Unwrap<GitDiffOptions>(Nan::To<v8::Object>(info[2]).ToLocalChecked())->GetValue();
  }
  else {
    from_opts = 0;
  }
// end convert_from_v8 block
          baton->opts = from_opts;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[3]));
  TreeToWorkdirWorker *worker = new TreeToWorkdirWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("old_tree", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("opts", Nan::To<v8::Object>(info[2]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitDiff::TreeToWorkdirWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->old_tree
            ,baton->opts
    );

    int result = git_diff_tree_to_workdir(
&baton->diff,baton->repo,baton->old_tree,baton->opts  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitDiff::TreeToWorkdirWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->diff != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
            Nan::Set(owners, Nan::New<v8::Number>(owners->Length()), Nan::To<v8::Object>(this->GetFromPersistent("repo")).ToLocalChecked());
             to = GitDiff::New(
        baton->diff,
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
        err = Nan::To<v8::Object>(Nan::Error("Method treeToWorkdir has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.treeToWorkdir").ToLocalChecked());
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
              workerArguments.push(GetFromPersistent("old_tree"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method treeToWorkdir has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.treeToWorkdir").ToLocalChecked());
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
   * @param Tree old_tree
   * @param DiffOptions opts
    * @param Diff callback
   */
NAN_METHOD(GitDiff::TreeToWorkdirWithIndex) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 3 || !info[3]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  TreeToWorkdirWithIndexBaton* baton = new TreeToWorkdirWithIndexBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  git_tree * from_old_tree = NULL;
    if (info[1]->IsObject()) {
from_old_tree = Nan::ObjectWrap::Unwrap<GitTree>(Nan::To<v8::Object>(info[1]).ToLocalChecked())->GetValue();
  }
  else {
    from_old_tree = 0;
  }
// end convert_from_v8 block
          baton->old_tree = from_old_tree;
// start convert_from_v8 block
  const git_diff_options * from_opts = NULL;
    if (info[2]->IsObject()) {
from_opts = Nan::ObjectWrap::Unwrap<GitDiffOptions>(Nan::To<v8::Object>(info[2]).ToLocalChecked())->GetValue();
  }
  else {
    from_opts = 0;
  }
// end convert_from_v8 block
          baton->opts = from_opts;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[3]));
  TreeToWorkdirWithIndexWorker *worker = new TreeToWorkdirWithIndexWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("old_tree", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("opts", Nan::To<v8::Object>(info[2]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitDiff::TreeToWorkdirWithIndexWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->old_tree
            ,baton->opts
    );

    int result = git_diff_tree_to_workdir_with_index(
&baton->diff,baton->repo,baton->old_tree,baton->opts  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitDiff::TreeToWorkdirWithIndexWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->diff != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
            Nan::Set(owners, Nan::New<v8::Number>(owners->Length()), Nan::To<v8::Object>(this->GetFromPersistent("repo")).ToLocalChecked());
             to = GitDiff::New(
        baton->diff,
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
        err = Nan::To<v8::Object>(Nan::Error("Method treeToWorkdirWithIndex has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.treeToWorkdirWithIndex").ToLocalChecked());
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
              workerArguments.push(GetFromPersistent("old_tree"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method treeToWorkdirWithIndex has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Diff.treeToWorkdirWithIndex").ToLocalChecked());
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
      * @return DiffPerfdata out    */
NAN_METHOD(GitDiff::GetPerfdata) {
  Nan::EscapableHandleScope scope;

      git_diff_perfdata *out = (git_diff_perfdata *)malloc(sizeof(git_diff_perfdata));

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitDiff>(info.This())->GetValue()
    );

 int result =     git_diff_get_perfdata(
          out
,          Nan::ObjectWrap::Unwrap<GitDiff>(info.This())->GetValue()
    );

      if (result != GIT_OK) {
          free(out);

        if (git_error_last()) {
          return Nan::ThrowError(git_error_last()->message);
        } else {
          return Nan::ThrowError("Unknown Error");
        }
      } // lock master scope end

      v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (out != NULL) {
        to = GitDiffPerfdata::New(
        out,
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
    // force base class template instantiation, to make sure we get all the
// methods, statics, etc.
template class NodeGitWrapper<GitDiffTraits>;
 