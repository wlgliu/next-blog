import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName: string) => {
        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf-8')

        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })

    return allPostsData.sort((a: any, b: any) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}