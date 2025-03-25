import {createNavigation} from 'next-intl/navigation';
import {routing} from './routing';

// @ts-ignore
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
