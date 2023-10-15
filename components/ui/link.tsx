import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import type { ComponentPropsWithoutRef, ReactElement } from 'react';
import { cn } from '@/lib/cn';

// It is required to forward generics T to NextLinkProps in order to make DynamicRoute work.
// e.g. `/tag/[tagId]`
type LinkProps<T> =
	| NextLinkProps<T>
	| (ComponentPropsWithoutRef<'a'> & {
			external: true;
	  });

const Link = <T,>({
	children,
	className,
	...props
}: LinkProps<T>): ReactElement => {
	// Since experimental typedRoutes is enabled, NextLink only accepts
	// statically-typed routes and URL Objects, not strings.
	// Moreover, in React server components, it is unable to pass URL Objects via props. (SC to CC)
	// (It cannot be serialized as shown in the error message below.)

	// Warning: Only plain objects can be passed to Client Components from Server Components. URL objects are not supported.
	// <... className=... href={URL} target=... rel=... children=...>
	//                        ^^^^^

	// Therefore, we'd better use <a> tag instead of NextLink for external urls.

	// If the link is external, use <a> tag
	if ('external' in props) {
		// external is not a valid prop for <a> tag
		const { external, ...anchorProps } = props;
		return (
			<a className={cn(className)} {...anchorProps}>
				{children}
			</a>
		);
	}
	// If not, use NextLink
	return (
		<NextLink className={cn(className)} {...props}>
			{children}
		</NextLink>
	);
};

Link.displayName = 'Link';

export default Link;
