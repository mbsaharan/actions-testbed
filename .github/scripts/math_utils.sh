#!/usr/bin/env bash

add_numbers() {
  local a=$1
  local b=$2
  echo $((a + b))
}

add_numbers "$1" "$2"
