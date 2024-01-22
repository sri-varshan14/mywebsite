import { url } from "$lib"
import { getAllBlogDetail } from "$lib/db"
import * as index from '$lib'


export async function GET({ }) {
    const posts = await getAllBlogDetail();
    const headers = { 'Content-Type': 'application/xml' }
    const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${index.title}</title>
				<description>${index.description}</description>
				<link>${index.url}</link>
				<atom:link href="${index.url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
            .map(
                (post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${url}/${post.route}</link>
                            <guid isPermaLink="true">${index.url}${post.route}</guid>
                            <pubDate> ${new Date(post.date).toUTCString()} </pubDate>
                        </item>
                `
            )
            .join('')}
			</channel>
		</rss>
	`.trim()

    return new Response(xml, { headers })
}

