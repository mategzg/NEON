create table if not exists public.health_checks (
  id bigint generated always as identity primary key,
  checked_at timestamptz not null default now(),
  source text not null default 'app'
);

insert into public.health_checks (source)
values ('initial_setup')
on conflict do nothing;
