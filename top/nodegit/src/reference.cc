// This is a generated file, modify: generate/templates/templates/class_content.cc

#include <nan.h>
#include <string.h>

extern "C" {
  #include <git2.h>
 }

#include "../include/nodegit.h"
#include "../include/lock_master.h"
#include "../include/functions/copy.h"
#include "../include/reference.h"
#include "nodegit_wrapper.cc"
#include "../include/async_libgit2_queue_worker.h"

  #include "../include/repository.h"
  #include "../include/oid.h"
  #include "../include/strarray.h"
  #include "../include/object.h"
 
#include <iostream>

using namespace std;
using namespace v8;
using namespace node;

  GitRefs::~GitRefs() {
    // this will cause an error if you have a non-self-freeing object that also needs
    // to save values. Since the object that will eventually free the object has no
    // way of knowing to free these values.
                                                                                                                                                     }

  void GitRefs::InitializeComponent(v8::Local<v8::Object> target) {
    Nan::HandleScope scope;

    v8::Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(JSNewFunction);

    tpl->InstanceTemplate()->SetInternalFieldCount(1);
    tpl->SetClassName(Nan::New("Reference").ToLocalChecked());

          Nan::SetPrototypeMethod(tpl, "cmp", Cmp);
             Nan::SetMethod(tpl, "create", Create);
             Nan::SetMethod(tpl, "createMatching", CreateMatching);
            Nan::SetPrototypeMethod(tpl, "delete", Delete);
            Nan::SetPrototypeMethod(tpl, "dup", Dup);
             Nan::SetMethod(tpl, "dwim", Dwim);
             Nan::SetMethod(tpl, "ensureLog", EnsureLog);
             Nan::SetMethod(tpl, "hasLog", HasLog);
            Nan::SetPrototypeMethod(tpl, "isBranch", IsBranch);
            Nan::SetPrototypeMethod(tpl, "isNote", IsNote);
            Nan::SetPrototypeMethod(tpl, "isRemote", IsRemote);
            Nan::SetPrototypeMethod(tpl, "isTag", IsTag);
             Nan::SetMethod(tpl, "isValidName", IsValidName);
             Nan::SetMethod(tpl, "list", List);
             Nan::SetMethod(tpl, "lookup", Lookup);
            Nan::SetPrototypeMethod(tpl, "name", Name);
             Nan::SetMethod(tpl, "nameToId", NameToId);
             Nan::SetMethod(tpl, "normalizeName", NormalizeName);
            Nan::SetPrototypeMethod(tpl, "owner", Owner);
            Nan::SetPrototypeMethod(tpl, "peel", Peel);
             Nan::SetMethod(tpl, "remove", Remove);
            Nan::SetPrototypeMethod(tpl, "rename", Rename);
            Nan::SetPrototypeMethod(tpl, "resolve", Resolve);
            Nan::SetPrototypeMethod(tpl, "setTarget", SetTarget);
            Nan::SetPrototypeMethod(tpl, "shorthand", Shorthand);
             Nan::SetMethod(tpl, "symbolicCreate", SymbolicCreate);
             Nan::SetMethod(tpl, "symbolicCreateMatching", SymbolicCreateMatching);
            Nan::SetPrototypeMethod(tpl, "symbolicSetTarget", SymbolicSetTarget);
            Nan::SetPrototypeMethod(tpl, "symbolicTarget", SymbolicTarget);
            Nan::SetPrototypeMethod(tpl, "target", Target);
            Nan::SetPrototypeMethod(tpl, "targetPeel", TargetPeel);
            Nan::SetPrototypeMethod(tpl, "type", Type);
    
    InitializeTemplate(tpl);

    v8::Local<Function> _constructor_template = Nan::GetFunction(tpl).ToLocalChecked();
    constructor_template.Reset(_constructor_template);
    Nan::Set(target, Nan::New("Reference").ToLocalChecked(), _constructor_template);
  }

  
/*
   * @param Reference ref2
     * @return Number  result    */
NAN_METHOD(GitRefs::Cmp) {
  Nan::EscapableHandleScope scope;

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Reference ref2 is required.");
  }

// start convert_from_v8 block
  const git_reference * from_ref2 = NULL;
from_ref2 = Nan::ObjectWrap::Unwrap<GitRefs>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
            ,
              from_ref2
    );

 int result =     git_reference_cmp(
          Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
,          from_ref2
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
   * @param String name
   * @param Oid id
   * @param Number force
   * @param String log_message
    * @param Reference callback
   */
NAN_METHOD(GitRefs::Create) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsString()) {
    return Nan::ThrowError("String name is required.");
  }

  if (info.Length() == 2
    || (!info[2]->IsObject() && !info[2]->IsString())) {
    return Nan::ThrowError("Oid id is required.");
  }
  if (info.Length() == 3 || !info[3]->IsNumber()) {
    return Nan::ThrowError("Number force is required.");
  }

  if (info.Length() == 4 || !info[4]->IsString()) {
    return Nan::ThrowError("String log_message is required.");
  }

  if (info.Length() == 5 || !info[5]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  CreateBaton* baton = new CreateBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  const char * from_name = NULL;

  Nan::Utf8String name(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_name = (const char *) malloc(name.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_name, *name, name.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_name) + name.length()), 0, 1);
// end convert_from_v8 block
          baton->name = from_name;
// start convert_from_v8 block
  const git_oid * from_id = NULL;
  if (info[2]->IsString()) {
    // Try and parse in a string to a git_oid
    Nan::Utf8String oidString(Nan::To<v8::String>(info[2]).ToLocalChecked());
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
from_id = Nan::ObjectWrap::Unwrap<GitOid>(Nan::To<v8::Object>(info[2]).ToLocalChecked())->GetValue();
  }
// end convert_from_v8 block
          baton->id = from_id;
            baton->idNeedsFree = info[2]->IsString();
// start convert_from_v8 block
  int from_force;
      from_force = (int)   info[3].As<v8::Number>()->Value();
// end convert_from_v8 block
          baton->force = from_force;
// start convert_from_v8 block
  const char * from_log_message = NULL;

  Nan::Utf8String log_message(Nan::To<v8::String>(info[4]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_log_message = (const char *) malloc(log_message.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_log_message, *log_message, log_message.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_log_message) + log_message.length()), 0, 1);
// end convert_from_v8 block
          baton->log_message = from_log_message;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[5]));
  CreateWorker *worker = new CreateWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("name", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("id", Nan::To<v8::Object>(info[2]).ToLocalChecked());
        if (!info[3]->IsUndefined() && !info[3]->IsNull())
          worker->SaveToPersistent("force", Nan::To<v8::Object>(info[3]).ToLocalChecked());
        if (!info[4]->IsUndefined() && !info[4]->IsNull())
          worker->SaveToPersistent("log_message", Nan::To<v8::Object>(info[4]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRefs::CreateWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->name
            ,baton->id
            ,baton->log_message
    );

    int result = git_reference_create(
&baton->out,baton->repo,baton->name,baton->id,baton->force,baton->log_message  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRefs::CreateWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_reference_owner(baton->out),
            true
          )).ToLocalChecked()
        );
         to = GitRefs::New(
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
        err = Nan::To<v8::Object>(Nan::Error("Method create has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.create").ToLocalChecked());
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
              workerArguments.push(GetFromPersistent("name"));
              workerArguments.push(GetFromPersistent("id"));
              workerArguments.push(GetFromPersistent("force"));
              workerArguments.push(GetFromPersistent("log_message"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method create has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.create").ToLocalChecked());
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
   * @param String name
   * @param Oid id
   * @param Number force
   * @param Oid current_id
   * @param String log_message
    * @param Reference callback
   */
NAN_METHOD(GitRefs::CreateMatching) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsString()) {
    return Nan::ThrowError("String name is required.");
  }

  if (info.Length() == 2
    || (!info[2]->IsObject() && !info[2]->IsString())) {
    return Nan::ThrowError("Oid id is required.");
  }
  if (info.Length() == 3 || !info[3]->IsNumber()) {
    return Nan::ThrowError("Number force is required.");
  }

  if (info.Length() == 4
    || (!info[4]->IsObject() && !info[4]->IsString())) {
    return Nan::ThrowError("Oid current_id is required.");
  }
  if (info.Length() == 5 || !info[5]->IsString()) {
    return Nan::ThrowError("String log_message is required.");
  }

  if (info.Length() == 6 || !info[6]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  CreateMatchingBaton* baton = new CreateMatchingBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  const char * from_name = NULL;

  Nan::Utf8String name(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_name = (const char *) malloc(name.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_name, *name, name.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_name) + name.length()), 0, 1);
// end convert_from_v8 block
          baton->name = from_name;
// start convert_from_v8 block
  const git_oid * from_id = NULL;
  if (info[2]->IsString()) {
    // Try and parse in a string to a git_oid
    Nan::Utf8String oidString(Nan::To<v8::String>(info[2]).ToLocalChecked());
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
from_id = Nan::ObjectWrap::Unwrap<GitOid>(Nan::To<v8::Object>(info[2]).ToLocalChecked())->GetValue();
  }
// end convert_from_v8 block
          baton->id = from_id;
            baton->idNeedsFree = info[2]->IsString();
// start convert_from_v8 block
  int from_force;
      from_force = (int)   info[3].As<v8::Number>()->Value();
// end convert_from_v8 block
          baton->force = from_force;
// start convert_from_v8 block
  const git_oid * from_current_id = NULL;
  if (info[4]->IsString()) {
    // Try and parse in a string to a git_oid
    Nan::Utf8String oidString(Nan::To<v8::String>(info[4]).ToLocalChecked());
    git_oid *oidOut = (git_oid *)malloc(sizeof(git_oid));

    if (git_oid_fromstr(oidOut, (const char *) strdup(*oidString)) != GIT_OK) {
      free(oidOut);

      if (git_error_last()) {
        return Nan::ThrowError(git_error_last()->message);
      } else {
        return Nan::ThrowError("Unknown Error");
      }
    }

    from_current_id = oidOut;
  }
  else {
from_current_id = Nan::ObjectWrap::Unwrap<GitOid>(Nan::To<v8::Object>(info[4]).ToLocalChecked())->GetValue();
  }
// end convert_from_v8 block
          baton->current_id = from_current_id;
            baton->current_idNeedsFree = info[4]->IsString();
// start convert_from_v8 block
  const char * from_log_message = NULL;

  Nan::Utf8String log_message(Nan::To<v8::String>(info[5]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_log_message = (const char *) malloc(log_message.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_log_message, *log_message, log_message.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_log_message) + log_message.length()), 0, 1);
// end convert_from_v8 block
          baton->log_message = from_log_message;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[6]));
  CreateMatchingWorker *worker = new CreateMatchingWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("name", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("id", Nan::To<v8::Object>(info[2]).ToLocalChecked());
        if (!info[3]->IsUndefined() && !info[3]->IsNull())
          worker->SaveToPersistent("force", Nan::To<v8::Object>(info[3]).ToLocalChecked());
        if (!info[4]->IsUndefined() && !info[4]->IsNull())
          worker->SaveToPersistent("current_id", Nan::To<v8::Object>(info[4]).ToLocalChecked());
        if (!info[5]->IsUndefined() && !info[5]->IsNull())
          worker->SaveToPersistent("log_message", Nan::To<v8::Object>(info[5]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRefs::CreateMatchingWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->name
            ,baton->id
            ,baton->current_id
            ,baton->log_message
    );

    int result = git_reference_create_matching(
&baton->out,baton->repo,baton->name,baton->id,baton->force,baton->current_id,baton->log_message  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRefs::CreateMatchingWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_reference_owner(baton->out),
            true
          )).ToLocalChecked()
        );
         to = GitRefs::New(
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
        err = Nan::To<v8::Object>(Nan::Error("Method createMatching has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.createMatching").ToLocalChecked());
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
              workerArguments.push(GetFromPersistent("name"));
              workerArguments.push(GetFromPersistent("id"));
              workerArguments.push(GetFromPersistent("force"));
              workerArguments.push(GetFromPersistent("current_id"));
              workerArguments.push(GetFromPersistent("log_message"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method createMatching has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.createMatching").ToLocalChecked());
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
      if (baton->current_idNeedsFree) {
        baton->current_idNeedsFree = false;
        free((void *)baton->current_id);
      }

  delete baton;
}

   
/*
     * @return Number  result    */
NAN_METHOD(GitRefs::Delete) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
    );

 int result =     git_reference_delete(
          Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
  
/*
     * @param Reference callback
   */
NAN_METHOD(GitRefs::Dup) {

  if (info.Length() == 0 || !info[0]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  DupBaton* baton = new DupBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

        baton->source = Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue();

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[0]));
  DupWorker *worker = new DupWorker(baton, callback);

        worker->SaveToPersistent("source", info.This());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRefs::DupWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->source
    );

    int result = git_reference_dup(
&baton->dest,baton->source  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRefs::DupWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->dest != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_reference_owner(baton->dest),
            true
          )).ToLocalChecked()
        );
         to = GitRefs::New(
        baton->dest,
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
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.dup").ToLocalChecked());
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
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.dup").ToLocalChecked());
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
   * @param String shorthand
    * @param Reference callback
   */
NAN_METHOD(GitRefs::Dwim) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsString()) {
    return Nan::ThrowError("String shorthand is required.");
  }

  if (info.Length() == 2 || !info[2]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  DwimBaton* baton = new DwimBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  const char * from_shorthand = NULL;

  Nan::Utf8String shorthand(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_shorthand = (const char *) malloc(shorthand.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_shorthand, *shorthand, shorthand.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_shorthand) + shorthand.length()), 0, 1);
// end convert_from_v8 block
          baton->shorthand = from_shorthand;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[2]));
  DwimWorker *worker = new DwimWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("shorthand", Nan::To<v8::Object>(info[1]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRefs::DwimWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->shorthand
    );

    int result = git_reference_dwim(
&baton->out,baton->repo,baton->shorthand  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRefs::DwimWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_reference_owner(baton->out),
            true
          )).ToLocalChecked()
        );
         to = GitRefs::New(
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
        err = Nan::To<v8::Object>(Nan::Error("Method dwim has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.dwim").ToLocalChecked());
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
              workerArguments.push(GetFromPersistent("shorthand"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method dwim has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.dwim").ToLocalChecked());
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
   * @param String refname
     * @return Number  result    */
NAN_METHOD(GitRefs::EnsureLog) {
  Nan::EscapableHandleScope scope;

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsString()) {
    return Nan::ThrowError("String refname is required.");
  }

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
// start convert_from_v8 block
  const char * from_refname = NULL;

  Nan::Utf8String refname(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_refname = (const char *) malloc(refname.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_refname, *refname, refname.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_refname) + refname.length()), 0, 1);
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              from_repo
            ,
              from_refname
    );

 int result =     git_reference_ensure_log(
          from_repo
,          from_refname
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
   * @param String refname
     * @return Number  result    */
NAN_METHOD(GitRefs::HasLog) {
  Nan::EscapableHandleScope scope;

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsString()) {
    return Nan::ThrowError("String refname is required.");
  }

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
// start convert_from_v8 block
  const char * from_refname = NULL;

  Nan::Utf8String refname(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_refname = (const char *) malloc(refname.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_refname, *refname, refname.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_refname) + refname.length()), 0, 1);
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              from_repo
            ,
              from_refname
    );

 int result =     git_reference_has_log(
          from_repo
,          from_refname
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
NAN_METHOD(GitRefs::IsBranch) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
    );

 int result =     git_reference_is_branch(
          Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
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
NAN_METHOD(GitRefs::IsNote) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
    );

 int result =     git_reference_is_note(
          Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
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
NAN_METHOD(GitRefs::IsRemote) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
    );

 int result =     git_reference_is_remote(
          Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
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
NAN_METHOD(GitRefs::IsTag) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
    );

 int result =     git_reference_is_tag(
          Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
   
/*
 * @param String refname
     * @return Number  result    */
NAN_METHOD(GitRefs::IsValidName) {
  Nan::EscapableHandleScope scope;

  if (info.Length() == 0 || !info[0]->IsString()) {
    return Nan::ThrowError("String refname is required.");
  }

// start convert_from_v8 block
  const char * from_refname = NULL;

  Nan::Utf8String refname(Nan::To<v8::String>(info[0]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_refname = (const char *) malloc(refname.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_refname, *refname, refname.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_refname) + refname.length()), 0, 1);
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              from_refname
    );

 int result =     git_reference_is_valid_name(
          from_refname
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
    * @param Array callback
   */
NAN_METHOD(GitRefs::List) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  ListBaton* baton = new ListBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

      baton->array = (git_strarray *)malloc(sizeof(git_strarray ));
// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[1]));
  ListWorker *worker = new ListWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRefs::ListWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->array
            ,baton->repo
    );

    int result = git_reference_list(
baton->array,baton->repo  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRefs::ListWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    v8::Local<Array> tmpArray = Nan::New<Array>(baton->array->count);
    for (unsigned int i = 0; i < baton->array->count; i++) {
      Nan::Set(tmpArray, Nan::New<Number>(i), Nan::New<v8::String>(baton->array->strings[i]).ToLocalChecked());
    }
 
  to = tmpArray;
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
        err = Nan::To<v8::Object>(Nan::Error("Method list has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.list").ToLocalChecked());
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method list has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.list").ToLocalChecked());
        v8::Local<v8::Value> argv[1] = {
          err
        };
        callback->Call(1, argv, async_resource);
      }
    } else {
      callback->Call(0, NULL, async_resource);
    }

          free((void*)baton->array);
  }

        free((void *)baton->array);

  delete baton;
}

  
/*
  * @param Repository repo
   * @param String name
    * @param Reference callback
   */
NAN_METHOD(GitRefs::Lookup) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsString()) {
    return Nan::ThrowError("String name is required.");
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
  const char * from_name = NULL;

  Nan::Utf8String name(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_name = (const char *) malloc(name.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_name, *name, name.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_name) + name.length()), 0, 1);
// end convert_from_v8 block
          baton->name = from_name;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[2]));
  LookupWorker *worker = new LookupWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("name", Nan::To<v8::Object>(info[1]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRefs::LookupWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->name
    );

    int result = git_reference_lookup(
&baton->out,baton->repo,baton->name  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRefs::LookupWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_reference_owner(baton->out),
            true
          )).ToLocalChecked()
        );
         to = GitRefs::New(
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
        err = Nan::To<v8::Object>(Nan::Error("Method lookup has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.lookup").ToLocalChecked());
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
              workerArguments.push(GetFromPersistent("name"));
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
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.lookup").ToLocalChecked());
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
     * @return String  result    */
NAN_METHOD(GitRefs::Name) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
    );

 const char * result =     git_reference_name(
          Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
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
   * @param String name
    * @param Oid callback
   */
NAN_METHOD(GitRefs::NameToId) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsString()) {
    return Nan::ThrowError("String name is required.");
  }

  if (info.Length() == 2 || !info[2]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  NameToIdBaton* baton = new NameToIdBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

      baton->out = (git_oid *)malloc(sizeof(git_oid ));
// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  const char * from_name = NULL;

  Nan::Utf8String name(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_name = (const char *) malloc(name.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_name, *name, name.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_name) + name.length()), 0, 1);
// end convert_from_v8 block
          baton->name = from_name;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[2]));
  NameToIdWorker *worker = new NameToIdWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("name", Nan::To<v8::Object>(info[1]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRefs::NameToIdWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->out
            ,baton->repo
            ,baton->name
    );

    int result = git_reference_name_to_id(
baton->out,baton->repo,baton->name  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRefs::NameToIdWorker::HandleOKCallback() {
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
        err = Nan::To<v8::Object>(Nan::Error("Method nameToId has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.nameToId").ToLocalChecked());
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
              workerArguments.push(GetFromPersistent("name"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method nameToId has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.nameToId").ToLocalChecked());
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
 * @param String buffer_out
   * @param Number buffer_size
   * @param String name
   * @param Number flags
     * @return Number  result    */
NAN_METHOD(GitRefs::NormalizeName) {
  Nan::EscapableHandleScope scope;

  if (info.Length() == 0 || !info[0]->IsString()) {
    return Nan::ThrowError("String buffer_out is required.");
  }

  if (info.Length() == 1 || !info[1]->IsNumber()) {
    return Nan::ThrowError("Number buffer_size is required.");
  }

  if (info.Length() == 2 || !info[2]->IsString()) {
    return Nan::ThrowError("String name is required.");
  }

  if (info.Length() == 3 || !info[3]->IsNumber()) {
    return Nan::ThrowError("Number flags is required.");
  }

// start convert_from_v8 block
  char * from_buffer_out = NULL;

  Nan::Utf8String buffer_out(Nan::To<v8::String>(info[0]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_buffer_out = (char *) malloc(buffer_out.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_buffer_out, *buffer_out, buffer_out.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_buffer_out) + buffer_out.length()), 0, 1);
// end convert_from_v8 block
// start convert_from_v8 block
  size_t from_buffer_size;
      from_buffer_size = (size_t)   info[1].As<v8::Number>()->Value();
// end convert_from_v8 block
// start convert_from_v8 block
  const char * from_name = NULL;

  Nan::Utf8String name(Nan::To<v8::String>(info[2]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_name = (const char *) malloc(name.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_name, *name, name.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_name) + name.length()), 0, 1);
// end convert_from_v8 block
// start convert_from_v8 block
  unsigned int from_flags;
      from_flags = (unsigned int)   info[3].As<v8::Number>()->Value();
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              from_buffer_out
            ,
              from_name
    );

 int result =     git_reference_normalize_name(
          from_buffer_out
,          from_buffer_size
,          from_name
,          from_flags
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
   
/*
     * @return Repository  result    */
NAN_METHOD(GitRefs::Owner) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
    );

 git_repository * result =     git_reference_owner(
          Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
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
    * @param Number type
    * @param Object callback
   */
NAN_METHOD(GitRefs::Peel) {

  if (info.Length() == 0 || !info[0]->IsNumber()) {
    return Nan::ThrowError("Number type is required.");
  }

  if (info.Length() == 1 || !info[1]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  PeelBaton* baton = new PeelBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

        baton->ref = Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue();
// start convert_from_v8 block
  git_object_t from_type;
      from_type = (git_object_t)  (int) info[0].As<v8::Number>()->Value();
// end convert_from_v8 block
          baton->type = from_type;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[1]));
  PeelWorker *worker = new PeelWorker(baton, callback);

        worker->SaveToPersistent("ref", info.This());
        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("type", Nan::To<v8::Object>(info[0]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRefs::PeelWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->ref
    );

    int result = git_reference_peel(
&baton->out,baton->ref,baton->type  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRefs::PeelWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_object_owner(baton->out),
            true
          )).ToLocalChecked()
        );
         to = GitObject::New(
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
        err = Nan::To<v8::Object>(Nan::Error("Method peel has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.peel").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("type"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method peel has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.peel").ToLocalChecked());
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
   * @param String name
     * @return Number  result    */
NAN_METHOD(GitRefs::Remove) {
  Nan::EscapableHandleScope scope;

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsString()) {
    return Nan::ThrowError("String name is required.");
  }

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
// start convert_from_v8 block
  const char * from_name = NULL;

  Nan::Utf8String name(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_name = (const char *) malloc(name.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_name, *name, name.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_name) + name.length()), 0, 1);
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              from_repo
            ,
              from_name
    );

 int result =     git_reference_remove(
          from_repo
,          from_name
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
  
/*
    * @param String new_name
   * @param Number force
   * @param String log_message
    * @param Reference callback
   */
NAN_METHOD(GitRefs::Rename) {

  if (info.Length() == 0 || !info[0]->IsString()) {
    return Nan::ThrowError("String new_name is required.");
  }

  if (info.Length() == 1 || !info[1]->IsNumber()) {
    return Nan::ThrowError("Number force is required.");
  }

  if (info.Length() == 2 || !info[2]->IsString()) {
    return Nan::ThrowError("String log_message is required.");
  }

  if (info.Length() == 3 || !info[3]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  RenameBaton* baton = new RenameBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

        baton->ref = Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue();
// start convert_from_v8 block
  const char * from_new_name = NULL;

  Nan::Utf8String new_name(Nan::To<v8::String>(info[0]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_new_name = (const char *) malloc(new_name.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_new_name, *new_name, new_name.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_new_name) + new_name.length()), 0, 1);
// end convert_from_v8 block
          baton->new_name = from_new_name;
// start convert_from_v8 block
  int from_force;
      from_force = (int)   info[1].As<v8::Number>()->Value();
// end convert_from_v8 block
          baton->force = from_force;
// start convert_from_v8 block
  const char * from_log_message = NULL;

  Nan::Utf8String log_message(Nan::To<v8::String>(info[2]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_log_message = (const char *) malloc(log_message.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_log_message, *log_message, log_message.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_log_message) + log_message.length()), 0, 1);
// end convert_from_v8 block
          baton->log_message = from_log_message;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[3]));
  RenameWorker *worker = new RenameWorker(baton, callback);

        worker->SaveToPersistent("ref", info.This());
        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("new_name", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("force", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("log_message", Nan::To<v8::Object>(info[2]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRefs::RenameWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->ref
            ,baton->new_name
            ,baton->log_message
    );

    int result = git_reference_rename(
&baton->new_ref,baton->ref,baton->new_name,baton->force,baton->log_message  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRefs::RenameWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->new_ref != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_reference_owner(baton->new_ref),
            true
          )).ToLocalChecked()
        );
         to = GitRefs::New(
        baton->new_ref,
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
        err = Nan::To<v8::Object>(Nan::Error("Method rename has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.rename").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("new_name"));
              workerArguments.push(GetFromPersistent("force"));
              workerArguments.push(GetFromPersistent("log_message"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method rename has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.rename").ToLocalChecked());
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
     * @param Reference callback
   */
NAN_METHOD(GitRefs::Resolve) {

  if (info.Length() == 0 || !info[0]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  ResolveBaton* baton = new ResolveBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

        baton->ref = Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue();

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[0]));
  ResolveWorker *worker = new ResolveWorker(baton, callback);

        worker->SaveToPersistent("ref", info.This());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRefs::ResolveWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->ref
    );

    int result = git_reference_resolve(
&baton->out,baton->ref  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRefs::ResolveWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_reference_owner(baton->out),
            true
          )).ToLocalChecked()
        );
         to = GitRefs::New(
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
        err = Nan::To<v8::Object>(Nan::Error("Method resolve has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.resolve").ToLocalChecked());
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method resolve has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.resolve").ToLocalChecked());
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
    * @param Oid id
   * @param String log_message
    * @param Reference callback
   */
NAN_METHOD(GitRefs::SetTarget) {

  if (info.Length() == 0
    || (!info[0]->IsObject() && !info[0]->IsString())) {
    return Nan::ThrowError("Oid id is required.");
  }
  if (info.Length() == 1 || !info[1]->IsString()) {
    return Nan::ThrowError("String log_message is required.");
  }

  if (info.Length() == 2 || !info[2]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  SetTargetBaton* baton = new SetTargetBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

        baton->ref = Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue();
// start convert_from_v8 block
  const git_oid * from_id = NULL;
  if (info[0]->IsString()) {
    // Try and parse in a string to a git_oid
    Nan::Utf8String oidString(Nan::To<v8::String>(info[0]).ToLocalChecked());
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
from_id = Nan::ObjectWrap::Unwrap<GitOid>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
  }
// end convert_from_v8 block
          baton->id = from_id;
            baton->idNeedsFree = info[0]->IsString();
// start convert_from_v8 block
  const char * from_log_message = NULL;

  Nan::Utf8String log_message(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_log_message = (const char *) malloc(log_message.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_log_message, *log_message, log_message.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_log_message) + log_message.length()), 0, 1);
// end convert_from_v8 block
          baton->log_message = from_log_message;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[2]));
  SetTargetWorker *worker = new SetTargetWorker(baton, callback);

        worker->SaveToPersistent("ref", info.This());
        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("id", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("log_message", Nan::To<v8::Object>(info[1]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRefs::SetTargetWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->ref
            ,baton->id
            ,baton->log_message
    );

    int result = git_reference_set_target(
&baton->out,baton->ref,baton->id,baton->log_message  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRefs::SetTargetWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_reference_owner(baton->out),
            true
          )).ToLocalChecked()
        );
         to = GitRefs::New(
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
        err = Nan::To<v8::Object>(Nan::Error("Method setTarget has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.setTarget").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("id"));
              workerArguments.push(GetFromPersistent("log_message"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method setTarget has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.setTarget").ToLocalChecked());
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
     * @return String  result    */
NAN_METHOD(GitRefs::Shorthand) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
    );

 const char * result =     git_reference_shorthand(
          Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
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
   * @param String name
   * @param String target
   * @param Number force
   * @param String log_message
    * @param Reference callback
   */
NAN_METHOD(GitRefs::SymbolicCreate) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsString()) {
    return Nan::ThrowError("String name is required.");
  }

  if (info.Length() == 2 || !info[2]->IsString()) {
    return Nan::ThrowError("String target is required.");
  }

  if (info.Length() == 3 || !info[3]->IsNumber()) {
    return Nan::ThrowError("Number force is required.");
  }

  if (info.Length() == 4 || !info[4]->IsString()) {
    return Nan::ThrowError("String log_message is required.");
  }

  if (info.Length() == 5 || !info[5]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  SymbolicCreateBaton* baton = new SymbolicCreateBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  const char * from_name = NULL;

  Nan::Utf8String name(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_name = (const char *) malloc(name.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_name, *name, name.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_name) + name.length()), 0, 1);
// end convert_from_v8 block
          baton->name = from_name;
// start convert_from_v8 block
  const char * from_target = NULL;

  Nan::Utf8String target(Nan::To<v8::String>(info[2]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_target = (const char *) malloc(target.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_target, *target, target.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_target) + target.length()), 0, 1);
// end convert_from_v8 block
          baton->target = from_target;
// start convert_from_v8 block
  int from_force;
      from_force = (int)   info[3].As<v8::Number>()->Value();
// end convert_from_v8 block
          baton->force = from_force;
// start convert_from_v8 block
  const char * from_log_message = NULL;

  Nan::Utf8String log_message(Nan::To<v8::String>(info[4]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_log_message = (const char *) malloc(log_message.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_log_message, *log_message, log_message.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_log_message) + log_message.length()), 0, 1);
// end convert_from_v8 block
          baton->log_message = from_log_message;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[5]));
  SymbolicCreateWorker *worker = new SymbolicCreateWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("name", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("target", Nan::To<v8::Object>(info[2]).ToLocalChecked());
        if (!info[3]->IsUndefined() && !info[3]->IsNull())
          worker->SaveToPersistent("force", Nan::To<v8::Object>(info[3]).ToLocalChecked());
        if (!info[4]->IsUndefined() && !info[4]->IsNull())
          worker->SaveToPersistent("log_message", Nan::To<v8::Object>(info[4]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRefs::SymbolicCreateWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->name
            ,baton->target
            ,baton->log_message
    );

    int result = git_reference_symbolic_create(
&baton->out,baton->repo,baton->name,baton->target,baton->force,baton->log_message  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRefs::SymbolicCreateWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_reference_owner(baton->out),
            true
          )).ToLocalChecked()
        );
         to = GitRefs::New(
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
        err = Nan::To<v8::Object>(Nan::Error("Method symbolicCreate has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.symbolicCreate").ToLocalChecked());
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
              workerArguments.push(GetFromPersistent("name"));
              workerArguments.push(GetFromPersistent("target"));
              workerArguments.push(GetFromPersistent("force"));
              workerArguments.push(GetFromPersistent("log_message"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method symbolicCreate has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.symbolicCreate").ToLocalChecked());
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
   * @param String name
   * @param String target
   * @param Number force
   * @param String current_value
   * @param String log_message
    * @param Reference callback
   */
NAN_METHOD(GitRefs::SymbolicCreateMatching) {

  if (info.Length() == 0 || !info[0]->IsObject()) {
    return Nan::ThrowError("Repository repo is required.");
  }

  if (info.Length() == 1 || !info[1]->IsString()) {
    return Nan::ThrowError("String name is required.");
  }

  if (info.Length() == 2 || !info[2]->IsString()) {
    return Nan::ThrowError("String target is required.");
  }

  if (info.Length() == 3 || !info[3]->IsNumber()) {
    return Nan::ThrowError("Number force is required.");
  }

  if (info.Length() == 4 || !info[4]->IsString()) {
    return Nan::ThrowError("String current_value is required.");
  }

  if (info.Length() == 5 || !info[5]->IsString()) {
    return Nan::ThrowError("String log_message is required.");
  }

  if (info.Length() == 6 || !info[6]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  SymbolicCreateMatchingBaton* baton = new SymbolicCreateMatchingBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

// start convert_from_v8 block
  git_repository * from_repo = NULL;
from_repo = Nan::ObjectWrap::Unwrap<GitRepository>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
// end convert_from_v8 block
          baton->repo = from_repo;
// start convert_from_v8 block
  const char * from_name = NULL;

  Nan::Utf8String name(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_name = (const char *) malloc(name.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_name, *name, name.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_name) + name.length()), 0, 1);
// end convert_from_v8 block
          baton->name = from_name;
// start convert_from_v8 block
  const char * from_target = NULL;

  Nan::Utf8String target(Nan::To<v8::String>(info[2]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_target = (const char *) malloc(target.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_target, *target, target.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_target) + target.length()), 0, 1);
// end convert_from_v8 block
          baton->target = from_target;
// start convert_from_v8 block
  int from_force;
      from_force = (int)   info[3].As<v8::Number>()->Value();
// end convert_from_v8 block
          baton->force = from_force;
// start convert_from_v8 block
  const char * from_current_value = NULL;

  Nan::Utf8String current_value(Nan::To<v8::String>(info[4]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_current_value = (const char *) malloc(current_value.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_current_value, *current_value, current_value.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_current_value) + current_value.length()), 0, 1);
// end convert_from_v8 block
          baton->current_value = from_current_value;
// start convert_from_v8 block
  const char * from_log_message = NULL;

  Nan::Utf8String log_message(Nan::To<v8::String>(info[5]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_log_message = (const char *) malloc(log_message.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_log_message, *log_message, log_message.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_log_message) + log_message.length()), 0, 1);
// end convert_from_v8 block
          baton->log_message = from_log_message;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[6]));
  SymbolicCreateMatchingWorker *worker = new SymbolicCreateMatchingWorker(baton, callback);

        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("repo", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("name", Nan::To<v8::Object>(info[1]).ToLocalChecked());
        if (!info[2]->IsUndefined() && !info[2]->IsNull())
          worker->SaveToPersistent("target", Nan::To<v8::Object>(info[2]).ToLocalChecked());
        if (!info[3]->IsUndefined() && !info[3]->IsNull())
          worker->SaveToPersistent("force", Nan::To<v8::Object>(info[3]).ToLocalChecked());
        if (!info[4]->IsUndefined() && !info[4]->IsNull())
          worker->SaveToPersistent("current_value", Nan::To<v8::Object>(info[4]).ToLocalChecked());
        if (!info[5]->IsUndefined() && !info[5]->IsNull())
          worker->SaveToPersistent("log_message", Nan::To<v8::Object>(info[5]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRefs::SymbolicCreateMatchingWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->repo
            ,baton->name
            ,baton->target
            ,baton->current_value
            ,baton->log_message
    );

    int result = git_reference_symbolic_create_matching(
&baton->out,baton->repo,baton->name,baton->target,baton->force,baton->current_value,baton->log_message  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRefs::SymbolicCreateMatchingWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_reference_owner(baton->out),
            true
          )).ToLocalChecked()
        );
         to = GitRefs::New(
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
        err = Nan::To<v8::Object>(Nan::Error("Method symbolicCreateMatching has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.symbolicCreateMatching").ToLocalChecked());
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
              workerArguments.push(GetFromPersistent("name"));
              workerArguments.push(GetFromPersistent("target"));
              workerArguments.push(GetFromPersistent("force"));
              workerArguments.push(GetFromPersistent("current_value"));
              workerArguments.push(GetFromPersistent("log_message"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method symbolicCreateMatching has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.symbolicCreateMatching").ToLocalChecked());
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
    * @param String target
   * @param String log_message
    * @param Reference callback
   */
NAN_METHOD(GitRefs::SymbolicSetTarget) {

  if (info.Length() == 0 || !info[0]->IsString()) {
    return Nan::ThrowError("String target is required.");
  }

  if (info.Length() == 2 || !info[2]->IsFunction()) {
    return Nan::ThrowError("Callback is required and must be a Function.");
  }

  SymbolicSetTargetBaton* baton = new SymbolicSetTargetBaton;

  baton->error_code = GIT_OK;
  baton->error = NULL;

        baton->ref = Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue();
// start convert_from_v8 block
  const char * from_target = NULL;

  Nan::Utf8String target(Nan::To<v8::String>(info[0]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_target = (const char *) malloc(target.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_target, *target, target.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_target) + target.length()), 0, 1);
// end convert_from_v8 block
          baton->target = from_target;
// start convert_from_v8 block
  const char * from_log_message = NULL;
    if (info[1]->IsString()) {

  Nan::Utf8String log_message(Nan::To<v8::String>(info[1]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_log_message = (const char *) malloc(log_message.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_log_message, *log_message, log_message.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_log_message) + log_message.length()), 0, 1);
  }
  else {
    from_log_message = 0;
  }
// end convert_from_v8 block
          baton->log_message = from_log_message;

  Nan::Callback *callback = new Nan::Callback(v8::Local<Function>::Cast(info[2]));
  SymbolicSetTargetWorker *worker = new SymbolicSetTargetWorker(baton, callback);

        worker->SaveToPersistent("ref", info.This());
        if (!info[0]->IsUndefined() && !info[0]->IsNull())
          worker->SaveToPersistent("target", Nan::To<v8::Object>(info[0]).ToLocalChecked());
        if (!info[1]->IsUndefined() && !info[1]->IsNull())
          worker->SaveToPersistent("log_message", Nan::To<v8::Object>(info[1]).ToLocalChecked());

  AsyncLibgit2QueueWorker(worker);
  return;
}

void GitRefs::SymbolicSetTargetWorker::Execute() {
  git_error_clear();

  {
    LockMaster lockMaster(
      /*asyncAction: */true
            ,baton->ref
            ,baton->target
            ,baton->log_message
    );

    int result = git_reference_symbolic_set_target(
&baton->out,baton->ref,baton->target,baton->log_message  );

      baton->error_code = result;

      if (result != GIT_OK && git_error_last() != NULL) {
        baton->error = git_error_dup(git_error_last());
      }

  }
}

void GitRefs::SymbolicSetTargetWorker::HandleOKCallback() {
    if (baton->error_code == GIT_OK) {
    v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (baton->out != NULL) {
      v8::Local<v8::Array> owners = Nan::New<Array>(0);
          Nan::Set(
          owners,
          Nan::New<v8::Number>(owners->Length()),
          Nan::To<v8::Object>(GitRepository::New(
            git_reference_owner(baton->out),
            true
          )).ToLocalChecked()
        );
         to = GitRefs::New(
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
        err = Nan::To<v8::Object>(Nan::Error("Method symbolicSetTarget has thrown an error.")).ToLocalChecked();
      }
      Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
      Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.symbolicSetTarget").ToLocalChecked());
      v8::Local<v8::Value> argv[1] = {
        err
      };
      callback->Call(1, argv, async_resource);
      if (baton->error->message)
        free((void *)baton->error->message);
      free((void *)baton->error);
    } else if (baton->error_code < 0) {
      std::queue< v8::Local<v8::Value> > workerArguments;
              workerArguments.push(GetFromPersistent("target"));
              workerArguments.push(GetFromPersistent("log_message"));
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
        v8::Local<v8::Object> err = Nan::To<v8::Object>(Nan::Error("Method symbolicSetTarget has thrown an error.")).ToLocalChecked();
        Nan::Set(err, Nan::New("errno").ToLocalChecked(), Nan::New(baton->error_code));
        Nan::Set(err, Nan::New("errorFunction").ToLocalChecked(), Nan::New("Reference.symbolicSetTarget").ToLocalChecked());
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
     * @return String  result    */
NAN_METHOD(GitRefs::SymbolicTarget) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
    );

 const char * result =     git_reference_symbolic_target(
          Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
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
     * @return Oid  result    */
NAN_METHOD(GitRefs::Target) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
    );

 const git_oid * result =     git_reference_target(
          Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
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
     * @return Oid  result    */
NAN_METHOD(GitRefs::TargetPeel) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
    );

 const git_oid * result =     git_reference_target_peel(
          Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
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
NAN_METHOD(GitRefs::Type) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
    );

 git_reference_t result =     git_reference_type(
          Nan::ObjectWrap::Unwrap<GitRefs>(info.This())->GetValue()
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
template class NodeGitWrapper<GitRefsTraits>;
 