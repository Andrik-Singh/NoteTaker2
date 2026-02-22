📝 NoteTaker2
Real-Time Collaborative Rich Text Platform

A production-ready, full-stack collaborative note application built with modern React architecture, real-time CRDT syncing, and a type-safe backend.

This project demonstrates advanced frontend engineering, distributed state synchronization, secure authentication flows, and scalable database design.

🚀 Live Demo

Deployed on Vercel
https://note-taker2-seven.vercel.app

🧠 What This Project Demonstrates
✅ Real-Time Distributed Systems

Implemented collaborative editing using:

Liveblocks

Yjs

Tiptap

Uses CRDT-based synchronization to ensure:

Conflict-free multi-user editing

Eventual consistency

Deterministic state merging

Live presence updates

This is not simple WebSocket syncing — it uses CRDT architecture.

✅ Modern Full-Stack Architecture

Built with:

Next.js 16 (App Router + Server Actions)

React 19

TypeScript

Architecture includes:

Server Components + Client Components separation

Secure server-only actions

Environment-based configuration

Optimized bundle boundaries

✅ Type-Safe Backend & Database Design

PostgreSQL

Drizzle ORM

Migration-driven schema evolution

Key strengths:

End-to-end type safety

Strict schema modeling

Query-level inference

Reduced runtime errors

✅ Secure Authentication System

Using:

better-auth

Email + OAuth-ready architecture

Protected server actions

Session-based authorization

Environment-isolated secrets

Handles:

Authenticated room access

Secure collaboration rooms

Controlled resource access

✅ Production-Grade UI System

Tailwind CSS 4

Radix UI primitives

Accessible component patterns

Dark mode support

Keyboard shortcuts

Command palette integration

Emphasis on:

Accessibility

Clean component abstraction

Scalable design system patterns