# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)

add_compile_options(
        -fexceptions
        -frtti
        -std=c++20
        -Wall
        -Wpedantic
        -DLOG_TAG=\"Fabric\")

file(GLOB rrc_image_SRC CONFIGURE_DEPENDS *.cpp)
add_library(rrc_image OBJECT ${rrc_image_SRC})

target_include_directories(rrc_image PUBLIC ${REACT_COMMON_DIR})

target_link_libraries(rrc_image
        glog
        folly_runtime
        glog_init
        jsi
        react_debug
        react_utils
        react_renderer_core
        react_renderer_debug
        react_renderer_graphics
        react_renderer_imagemanager
        react_renderer_mapbuffer
        rrc_view
        yoga
)
