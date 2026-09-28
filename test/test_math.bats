#!/usr/bin/env bats

@test "adds two positive numbers correctly" {
  run ./scripts/math_utils.sh 5 10
  [ "$status" -eq 0 ]
  [ "$output" -eq 15 ]
}

@test "handles negative numbers" {
  run ./scripts/math_utils.sh -3 8
  [ "$status" -eq 0 ]
  [ "$output" -eq 5 ]
}
