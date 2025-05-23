// This is a generated file, modify: generate/templates/templates/class_content.cc

#include <nan.h>
#include <string.h>

extern "C" {
  #include <git2.h>
 }

#include "../include/nodegit.h"
#include "../include/lock_master.h"
#include "../include/functions/copy.h"
#include "../include/oid.h"
#include "nodegit_wrapper.cc"
#include "../include/async_libgit2_queue_worker.h"

 
#include <iostream>

using namespace std;
using namespace v8;
using namespace node;

  GitOid::~GitOid() {
    // this will cause an error if you have a non-self-freeing object that also needs
    // to save values. Since the object that will eventually free the object has no
    // way of knowing to free these values.
                                         }

  void GitOid::InitializeComponent(v8::Local<v8::Object> target) {
    Nan::HandleScope scope;

    v8::Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(JSNewFunction);

    tpl->InstanceTemplate()->SetInternalFieldCount(1);
    tpl->SetClassName(Nan::New("Oid").ToLocalChecked());

          Nan::SetPrototypeMethod(tpl, "cmp", Cmp);
            Nan::SetPrototypeMethod(tpl, "cpy", Cpy);
            Nan::SetPrototypeMethod(tpl, "equal", Equal);
             Nan::SetMethod(tpl, "fromString", Fromstrp);
            Nan::SetPrototypeMethod(tpl, "isZero", IsZero);
            Nan::SetPrototypeMethod(tpl, "iszero", Iszero);
            Nan::SetPrototypeMethod(tpl, "ncmp", Ncmp);
            Nan::SetPrototypeMethod(tpl, "strcmp", Strcmp);
            Nan::SetPrototypeMethod(tpl, "streq", Streq);
            Nan::SetPrototypeMethod(tpl, "tostrS", TostrS);
    
    InitializeTemplate(tpl);

    v8::Local<Function> _constructor_template = Nan::GetFunction(tpl).ToLocalChecked();
    constructor_template.Reset(_constructor_template);
    Nan::Set(target, Nan::New("Oid").ToLocalChecked(), _constructor_template);
  }

  
/*
   * @param Oid b
     * @return Number  result    */
NAN_METHOD(GitOid::Cmp) {
  Nan::EscapableHandleScope scope;

  if (info.Length() == 0
    || (!info[0]->IsObject() && !info[0]->IsString())) {
    return Nan::ThrowError("Oid b is required.");
  }
// start convert_from_v8 block
  const git_oid * from_b = NULL;
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

    from_b = oidOut;
  }
  else {
from_b = Nan::ObjectWrap::Unwrap<GitOid>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
  }
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
            ,
              from_b
    );

 int result =     git_oid_cmp(
          Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
,          from_b
    );

      if (info[0]->IsString()) {
        free((void *)from_b);
      }

      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
   
/*
      * @return Oid out    */
NAN_METHOD(GitOid::Cpy) {
  Nan::EscapableHandleScope scope;

      git_oid *out = (git_oid *)malloc(sizeof(git_oid));

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
    );

    git_oid_cpy(
          out
,          Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
    if (out != NULL) {
        to = GitOid::New(
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
   
/*
   * @param Oid b
     * @return Number  result    */
NAN_METHOD(GitOid::Equal) {
  Nan::EscapableHandleScope scope;

  if (info.Length() == 0
    || (!info[0]->IsObject() && !info[0]->IsString())) {
    return Nan::ThrowError("Oid b is required.");
  }
// start convert_from_v8 block
  const git_oid * from_b = NULL;
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

    from_b = oidOut;
  }
  else {
from_b = Nan::ObjectWrap::Unwrap<GitOid>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
  }
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
            ,
              from_b
    );

 int result =     git_oid_equal(
          Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
,          from_b
    );

      if (info[0]->IsString()) {
        free((void *)from_b);
      }

      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
   
/*
  * @param String str
     * @return Oid out    */
NAN_METHOD(GitOid::Fromstrp) {
  Nan::EscapableHandleScope scope;

  if (info.Length() == 0 || !info[0]->IsString()) {
    return Nan::ThrowError("String str is required.");
  }

      git_oid *out = (git_oid *)malloc(sizeof(git_oid));
// start convert_from_v8 block
  const char * from_str = NULL;

  Nan::Utf8String str(Nan::To<v8::String>(info[0]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_str = (const char *) malloc(str.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_str, *str, str.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_str) + str.length()), 0, 1);
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              from_str
    );

 int result =     git_oid_fromstrp(
          out
,          from_str
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
        to = GitOid::New(
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
   
/*
     * @return Number  result    */
NAN_METHOD(GitOid::IsZero) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
    );

 int result =     git_oid_is_zero(
          Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
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
NAN_METHOD(GitOid::Iszero) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
    );

 int result =     git_oid_iszero(
          Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
   
/*
   * @param Oid b
   * @param Number len
     * @return Number  result    */
NAN_METHOD(GitOid::Ncmp) {
  Nan::EscapableHandleScope scope;

  if (info.Length() == 0
    || (!info[0]->IsObject() && !info[0]->IsString())) {
    return Nan::ThrowError("Oid b is required.");
  }
  if (info.Length() == 1 || !info[1]->IsNumber()) {
    return Nan::ThrowError("Number len is required.");
  }

// start convert_from_v8 block
  const git_oid * from_b = NULL;
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

    from_b = oidOut;
  }
  else {
from_b = Nan::ObjectWrap::Unwrap<GitOid>(Nan::To<v8::Object>(info[0]).ToLocalChecked())->GetValue();
  }
// end convert_from_v8 block
// start convert_from_v8 block
  size_t from_len;
      from_len = (size_t)   info[1].As<v8::Number>()->Value();
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
            ,
              from_b
    );

 int result =     git_oid_ncmp(
          Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
,          from_b
,          from_len
    );

      if (info[0]->IsString()) {
        free((void *)from_b);
      }

      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
   
/*
   * @param String str
     * @return Number  result    */
NAN_METHOD(GitOid::Strcmp) {
  Nan::EscapableHandleScope scope;

  if (info.Length() == 0 || !info[0]->IsString()) {
    return Nan::ThrowError("String str is required.");
  }

// start convert_from_v8 block
  const char * from_str = NULL;

  Nan::Utf8String str(Nan::To<v8::String>(info[0]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_str = (const char *) malloc(str.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_str, *str, str.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_str) + str.length()), 0, 1);
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
            ,
              from_str
    );

 int result =     git_oid_strcmp(
          Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
,          from_str
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
   
/*
   * @param String str
     * @return Number  result    */
NAN_METHOD(GitOid::Streq) {
  Nan::EscapableHandleScope scope;

  if (info.Length() == 0 || !info[0]->IsString()) {
    return Nan::ThrowError("String str is required.");
  }

// start convert_from_v8 block
  const char * from_str = NULL;

  Nan::Utf8String str(Nan::To<v8::String>(info[0]).ToLocalChecked());
  // malloc with one extra byte so we can add the terminating null character C-strings expect:
  from_str = (const char *) malloc(str.length() + 1);
  // copy the characters from the nodejs string into our C-string (used instead of strdup or strcpy because nulls in
  // the middle of strings are valid coming from nodejs):
  memcpy((void *)from_str, *str, str.length());
  // ensure the final byte of our new string is null, extra casts added to ensure compatibility with various C types
  // used in the nodejs binding generation:
  memset((void *)(((char *)from_str) + str.length()), 0, 1);
// end convert_from_v8 block

  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
            ,
              from_str
    );

 int result =     git_oid_streq(
          Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
,          from_str
    );


      v8::Local<v8::Value> to;
// start convert_to_v8 block
     to = Nan::New<Number>( result);
  // end convert_to_v8 block
        return info.GetReturnValue().Set(scope.Escape(to));
  }
}
   
/*
     * @return String  result    */
NAN_METHOD(GitOid::TostrS) {
  Nan::EscapableHandleScope scope;


  git_error_clear();

  { // lock master scope start
    LockMaster lockMaster(
      /*asyncAction: */false
            ,
              Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
    );

 char * result =     git_oid_tostr_s(
          Nan::ObjectWrap::Unwrap<GitOid>(info.This())->GetValue()
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
template class NodeGitWrapper<GitOidTraits>;
 