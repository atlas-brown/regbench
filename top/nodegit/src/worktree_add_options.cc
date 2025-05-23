// This is a generated file, modify: generate/templates/templates/class_content.cc

#include <nan.h>
#include <string.h>

extern "C" {
  #include <git2.h>
 }

#include "../include/nodegit.h"
#include "../include/lock_master.h"
#include "../include/functions/copy.h"
#include "../include/worktree_add_options.h"
#include "nodegit_wrapper.cc"
#include "../include/async_libgit2_queue_worker.h"

 
#include <iostream>

using namespace std;
using namespace v8;
using namespace node;

  GitWorktreeAddOptions::~GitWorktreeAddOptions() {
    // this will cause an error if you have a non-self-freeing object that also needs
    // to save values. Since the object that will eventually free the object has no
    // way of knowing to free these values.
   }

  void GitWorktreeAddOptions::InitializeComponent(v8::Local<v8::Object> target) {
    Nan::HandleScope scope;

    v8::Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(JSNewFunction);

    tpl->InstanceTemplate()->SetInternalFieldCount(1);
    tpl->SetClassName(Nan::New("WorktreeAddOptions").ToLocalChecked());

         Nan::SetPrototypeMethod(tpl, "version", Version);
         Nan::SetPrototypeMethod(tpl, "lock", Lock);
  
    InitializeTemplate(tpl);

    v8::Local<Function> _constructor_template = Nan::GetFunction(tpl).ToLocalChecked();
    constructor_template.Reset(_constructor_template);
    Nan::Set(target, Nan::New("WorktreeAddOptions").ToLocalChecked(), _constructor_template);
  }

      // start field block
    NAN_METHOD(GitWorktreeAddOptions::Version) {
      v8::Local<v8::Value> to;

            unsigned int
           version =
          Nan::ObjectWrap::Unwrap<GitWorktreeAddOptions>(info.This())->GetValue()->version;
 // start convert_to_v8 block
     to = Nan::New<Number>( version);
  // end convert_to_v8 block
      info.GetReturnValue().Set(to);
    }
    // end field block
     // start field block
    NAN_METHOD(GitWorktreeAddOptions::Lock) {
      v8::Local<v8::Value> to;

            int
           lock =
          Nan::ObjectWrap::Unwrap<GitWorktreeAddOptions>(info.This())->GetValue()->lock;
 // start convert_to_v8 block
     to = Nan::New<Number>( lock);
  // end convert_to_v8 block
      info.GetReturnValue().Set(to);
    }
    // end field block
  // force base class template instantiation, to make sure we get all the
// methods, statics, etc.
template class NodeGitWrapper<GitWorktreeAddOptionsTraits>;
 