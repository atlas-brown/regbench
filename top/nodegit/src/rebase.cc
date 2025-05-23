// This is a generated file, modify: generate/templates/templates/class_content.cc

#include <nan.h>
#include <string.h>

extern "C" {
  #include <git2.h>
 }

#include "../include/nodegit.h"
#include "../include/lock_master.h"
#include "../include/functions/copy.h"
#include "../include/rebase.h"
#include "nodegit_wrapper.cc"
#include "../include/async_libgit2_queue_worker.h"

  #include "../include/oid.h"
  #include "../include/signature.h"
  #include "../include/repository.h"
  #include "../include/annotated_commit.h"
  #include "../include/rebase_options.h"
  #include "../include/index.h"
  #include "../include/rebase_operation.h"
 
#include <iostream>

using namespace std;
using namespace v8;
using namespace node;

  GitRebase::~GitRebase() {
    // this will cause an error if you have a non-self-freeing object that also needs
    // to save values. Since the object that will eventually free the object has no
    // way of knowing to free these values.
                                                             }

  void GitRebase::InitializeComponent(v8::Local<v8::Object> target) {
    Nan::HandleScope scope;

    v8::Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(JSNewFunction);

    tpl->InstanceTemplate()->SetInternalFieldCount(1);
    tpl->SetClassName(Nan::New("Rebase").ToLocalChecked());

          Nan::SetPrototypeMethod(tpl, "abort", Abort);
            Nan::SetPrototypeMethod(tpl, "commit", Commit);
            Nan::SetPrototypeMethod(tpl, "finish", Finish);
             Nan::SetMethod(tpl, "init", Init);
            Nan::SetPrototypeMethod(tpl, "inmemoryIndex", InmemoryIndex);
            Nan::SetPrototypeMethod(tpl, "next", Next);
            Nan::SetPrototypeMethod(tpl, "ontoId", OntoId);
            Nan::SetPrototypeMethod(tpl, "ontoName", OntoName);
             Nan::SetMethod(tpl, "open", Open);
            Nan::SetPrototypeMethod(tpl, "operationByIndex", OperationByindex);
            Nan::SetPrototypeMethod(tpl, "operationCurrent", OperationCurrent);
            Nan::SetPrototypeMethod(tpl, "operationEntrycount", OperationEntrycount);
            Nan::SetPrototypeMethod(tpl, "origHeadId", OrigHeadId);
            Nan::SetPrototypeMethod(tpl, "origHeadName", OrigHeadName);
    
    InitializeTemplate(tpl);

    v8::Local<Function> _constructor_template = Nan::GetFunction(tpl).ToLocalChecked();
    constructor_template.Reset(_constructor_template);
    Nan::Set(target, Nan::New("Rebase").ToLocalChecked(), _constructor_template);
  }

 
/*
     */
NAN_METHOD(GitRebase::Abort) {

  if (info.Length() == 0 || !info[0]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  AbortBaton* baton = new AbortBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

        baton->rebase = Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue();

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[0]));
  AbortWorker *worker = new AbortWorker(baton, callback);

        worker->SaveToPersistent("rebase", info.This());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRebase::AbortWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->rebase
    );

    int result = git_rebase_abort(
baton->rebase  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRebase::AbortWorker::HandleOKCallback() {
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
        err = Nan::To<v8::Object>(Nan::Error("Method abort has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Rebase.abort").ToLocalChecked());
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method abort has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Rebase.abort").ToLocalChecked());
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
    * @param Signature author
   * @param Signature committer
   * @param String message_encoding
   * @param String message
    * @param Oid callback
   */
NAN_METHOD(GitRebase::Commit) {

  if (info.Length() == 1 || !info[1]->IsObject()) {
    return Nan::ThrowError("Signature committer is required.");
  }

  if (info.Length() == 4 || !info[4]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  CommitBaton* baton = new CommitBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

      baton->id = (git_oid *)malloc(sizeof(git_oid ));
        baton->rebase = Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue();
// start convert_from_v8 block
  const git_signature * from_author = NULL;
    if (info[0]->IsObject()) {
from_author = Nan::ObjectWrap::Unwrap<GitSignature>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
  }
  else {
    from_author = 0;
  }
// end convert_from_v8 block
          baton->author = from_author;
// start convert_from_v8 block
  const git_signature * from_committer = NULL;
from_committer = Nan::ObjectWrap::Unwrap<GitSignature>(Nan::To<v8::Object>(info[1]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->committer = from_committer;
// start convert_from_v8 block
  const char * from_message_encoding = NULL;
    if (info[2]->IsString()) {

  Nan::Utf8String message_encoding(Nan::To<v8::String>(info[2]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_message_encoding = (const char *) malloc(message_encoding.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_message_encoding, *message_encoding, message_encoding.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_message_encoding) + message_encoding.length()), 0, 1);
  }
  else {
    from_message_encoding = 0;
  }
// end convert_from_v8 block
          baton->message_encoding = from_message_encoding;
// start convert_from_v8 block
  const char * from_message = NULL;
    if (info[3]->IsString()) {

  Nan::Utf8String message(Nan::To<v8::String>(info[3]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_message = (const char *) malloc(message.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_message, *message, message.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_message) + message.length()), 0, 1);
  }
  else {
    from_message = 0;
  }
// end convert_from_v8 block
          baton->message = from_message;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[4]));
  CommitWorker *worker = new CommitWorker(baton, callback);

        worker->SaveToPersistent("rebase", info.This());
        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("author", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("committer", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("message_encoding", Nan::To<v8::Object>(info[2]).ToLocalChecked());
        if (!info[3]->IsUndefined() && !info[3]->IsNull())
          worker->SaveToPersistent("message", Nan::To<v8::Object>(info[3]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRebase::CommitWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->id
            ,baton->rebase
            ,baton->author
            ,baton->committer
            ,baton->message_encoding
            ,baton->message
    );

    int result = git_rebase_commit(
baton->id,baton->rebase,baton->author,baton->committer,baton->message_encoding,baton->message  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRebase::CommitWorker::HandleOKCallback() {
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
        err = Nan::To<v8::Object>(Nan::Error("Method commit has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Rebase.commit").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("author"));
              workerArguments.push(GetFromPersistent("committer"));
              workerArguments.push(GetFromPersistent("message_encoding"));
              workerArguments.push(GetFromPersistent("message"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method commit has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Rebase.commit").ToLocalChecked());
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
   * @param Signature signature
     * @return Number  result    */
NAN_METHOD(GitRebase::Finish) {
  Nan::EscapableHandleScope scope;

// start convert_from_v8 block
  const git_signature * from_signature = NULL;
    if (info[0]->IsObject()) {
from_signature = Nan::ObjectWrap::Unwrap<GitSignature>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
  }
  else {
    from_signature = 0;
  }
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
            ,
              from_signature
    );

 int result =     git_rebase_finish(
          Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
,          from_signature
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
   * @param AnnotatedCommit branch
   * @param AnnotatedCommit upstream
   * @param AnnotatedCommit onto
   * @param RebaseOptions opts
    * @param Rebase callback
   */
NAN_METHOD(GitRebase::Init) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsObject()) {
    return Nan::ThrowError("AnnotatedCommit branch is required.");
  }

  if (info.Length() == 5 || !info[5]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  InitBaton* baton = new InitBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  const git_annotated_commit * from_branch = NULL;
from_branch = Nan::ObjectWrap::Unwrap<GitAnnotatedCommit>(Nan::To<v8::Object>(info[1]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->branch = from_branch;
// start convert_from_v8 block
  const git_annotated_commit * from_upstream = NULL;
    if (info[2]->IsObject()) {
from_upstream = Nan::ObjectWrap::Unwrap<GitAnnotatedCommit>(Nan::To<v8::Object>(info[2]).ToLocalChecked())->GetValue();
  }
  else {
    from_upstream = 0;
  }
// end convert_from_v8 block
          baton->upstream = from_upstream;
// start convert_from_v8 block
  const git_annotated_commit * from_onto = NULL;
    if (info[3]->IsObject()) {
from_onto = Nan::ObjectWrap::Unwrap<GitAnnotatedCommit>(Nan::To<v8::Object>(info[3]).ToLocalChecked())->GetValue();
  }
  else {
    from_onto = 0;
  }
// end convert_from_v8 block
          baton->onto = from_onto;
// start convert_from_v8 block
  const git_rebase_options * from_opts = NULL;
    if (info[4]->IsObject()) {
from_opts = Nan::ObjectWrap::Unwrap<GitRebaseOptions>(Nan::To<v8::Object>(info[4]).ToLocalChecked())->GetValue();
  }
  else {
    from_opts = 0;
  }
// end convert_from_v8 block
          baton->opts = from_opts;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[5]));
  InitWorker *worker = new InitWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("branch", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("upstream", Nan::To<v8::Object>(info[2]).ToLocalChecked());
        if (!info[3]->IsUndefined() && !info[3]->IsNull())
          worker->SaveToPersistent("onto", Nan::To<v8::Object>(info[3]).ToLocalChecked());
        if (!info[4]->IsUndefined() && !info[4]->IsNull())
          worker->SaveToPersistent("opts", Nan::To<v8::Object>(info[4]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRebase::InitWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->branch
            ,baton->upstream
            ,baton->onto
            ,baton->opts
    );

    int result = git_rebase_init(
&baton->out,baton->repo,baton->branch,baton->upstream,baton->onto,baton->opts  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRebase::InitWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
            Nan::Set(owners, Nan::New<v8::Number>(owners->Length()), Nan::To<v8::Object>(this->GetFromPersistent("repo")).ToLocalChecked());
             to = GitRebase::New(
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
        err = Nan::To<v8::Object>(Nan::Error("Method init has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Rebase.init").ToLocalChecked());
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
              workerArguments.push(GetFromPersistent("branch"));
              workerArguments.push(GetFromPersistent("upstream"));
              workerArguments.push(GetFromPersistent("onto"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method init has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Rebase.init").ToLocalChecked());
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
 * @param Index index
       * @return Number  result    */
NAN_METHOD(GitRebase::InmemoryIndex) {
  Nan::EscapableHandleScope scope;

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Index index is required.");
  }

// start convert_from_v8 block
  git_index ** from_index = NULL;
*from_index = Nan::ObjectWrap::Unwrap<GitIndex>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              from_index
            ,
              Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );

 int result =     git_rebase_inmemory_index(
          from_index
,          Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
  
/*
     * @param RebaseOperation callback
   */
NAN_METHOD(GitRebase::Next) {

  if (info.Length() == 0 || !info[0]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  NextBaton* baton = new NextBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

        baton->rebase = Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue();

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[0]));
  NextWorker *worker = new NextWorker(baton, callback);

        worker->SaveToPersistent("rebase", info.This());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRebase::NextWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->rebase
    );

    int result = git_rebase_next(
&baton->operation,baton->rebase  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRebase::NextWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->operation != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
            Nan::Set(owners, Nan::New<v8::Number>(owners->Length()), Nan::To<v8::Object>(this->GetFromPersistent("rebase")).ToLocalChecked());
             to = GitRebaseOperation::New(
        baton->operation,
        false
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
        err = Nan::To<v8::Object>(Nan::Error("Method next has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Rebase.next").ToLocalChecked());
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method next has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Rebase.next").ToLocalChecked());
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
     * @return Oid  result    */
NAN_METHOD(GitRebase::OntoId) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );

 const git_oid * result =     git_rebase_onto_id(
          Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );

        // null checks on pointers
        if (!result) {
          return info.GetReturnValue().Set(scope.Escape(Nan::Undefined()));
        }

      v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (result != NULL) {
        to = GitOid::New(
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
     * @return String  result    */
NAN_METHOD(GitRebase::OntoName) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );

 const char * result =     git_rebase_onto_name(
          Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );

        // null checks on pointers
        if (!result) {
          return info.GetReturnValue().Set(scope.Escape(Nan::Undefined()));
        }

      v8::Local<v8::Value> to;
// start convert_to_v8 block
  if (result){
       to = Nan::New<v8::String>(result).ToLocalChecked();
   }
  else {
    to = Nan::Null();
  }

  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
  
/*
  * @param Repository repo
   * @param RebaseOptions opts
    * @param Rebase callback
   */
NAN_METHOD(GitRebase::Open) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsObject()) {
    return Nan::ThrowError("RebaseOptions opts is required.");
  }

  if (info.Length() == 2 || !info[2]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  OpenBaton* baton = new OpenBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  const git_rebase_options * from_opts = NULL;
from_opts = Nan::ObjectWrap::Unwrap<GitRebaseOptions>(Nan::To<v8::Object>(info[1]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->opts = from_opts;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[2]));
  OpenWorker *worker = new OpenWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("opts", Nan::To<v8::Object>(info[1]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRebase::OpenWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->opts
    );

    int result = git_rebase_open(
&baton->out,baton->repo,baton->opts  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRebase::OpenWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
            Nan::Set(owners, Nan::New<v8::Number>(owners->Length()), Nan::To<v8::Object>(this->GetFromPersistent("repo")).ToLocalChecked());
             to = GitRebase::New(
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
        err = Nan::To<v8::Object>(Nan::Error("Method open has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Rebase.open").ToLocalChecked());
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method open has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Rebase.open").ToLocalChecked());
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
     * @return RebaseOperation  result    */
NAN_METHOD(GitRebase::OperationByindex) {
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
              Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );

 git_rebase_operation * result =     git_rebase_operation_byindex(
          Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
,          from_idx
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
          to = GitRebaseOperation::New(
        result,
        false
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
NAN_METHOD(GitRebase::OperationCurrent) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );

 size_t result =     git_rebase_operation_current(
          Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
   
/*
     * @return Number  result    */
NAN_METHOD(GitRebase::OperationEntrycount) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );

 size_t result =     git_rebase_operation_entrycount(
          Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
   
/*
     * @return Oid  result    */
NAN_METHOD(GitRebase::OrigHeadId) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );

 const git_oid * result =     git_rebase_orig_head_id(
          Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );

        // null checks on pointers
        if (!result) {
          return info.GetReturnValue().Set(scope.Escape(Nan::Undefined()));
        }

      v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (result != NULL) {
        to = GitOid::New(
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
     * @return String  result    */
NAN_METHOD(GitRebase::OrigHeadName) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );

 const char * result =     git_rebase_orig_head_name(
          Nan::ObjectWrap::Unwrap<GitRebase>(info.This())->GetValue()
    );

        // null checks on pointers
        if (!result) {
          return info.GetReturnValue().Set(scope.Escape(Nan::Undefined()));
        }

      v8::Local<v8::Value> to;
// start convert_to_v8 block
  if (result){
       to = Nan::New<v8::String>(result).ToLocalChecked();
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
template class NodeGitWrapper<GitRebaseTraits>;
 