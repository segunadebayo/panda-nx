# PandaNx

This is a minimal setup of Panda CSS in an integrated monorepo with nx.

## Structure

In this monorepo, you'll find **web** (a react app with vite), **ui** (a react lib with no bundler) and **styled-system** (a js lib containing the panda config and generated code).

## Problem

The styles are correctly extracted by Panda CSS when declared within **web** but are being ignored when declared in a lib, here **ui**.
