// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from 'next'
import { NextRequest } from 'next/server';

type Data = {
  name: string;
  desc: string;
}



export default function listData(
  _req: NextRequest,
  res: NextApiResponse<{data: Data[]}>
) {
  console.log('[Time] ', new Date().toLocaleString());
  res.status(200).json({
    data: [
      {
        name: 'eslint',
        desc: 'ESLint 是一个流行的 JavaScript 代码检查工具，它可以帮助开发团队规范化代码风格、发现潜在的语法错误和逻辑错误。ESLint 支持基于配置文件来定义检查规则，在不同项目中可以根据不同的需求进行定制化配置。'
      },
      {
        name: 'prettier',
        desc: 'Prettier是一个代码格式化工具，支持多种编程语言，包括JavaScript、TypeScript、CSS、HTML等。它能够自动分析您的代码并在不破坏其功能的情况下对其进行重新排列和格式化，以使其更易于阅读和理解。Prettier遵循一组代码格式规则，并在保存代码时自动应用这些规则，从而节省了手动调整代码格式的时间和精力。Prettier还可以与许多编辑器和IDE集成，例如VS Code、Sublime Text和Atom等。'
      },
      {
        name: 'husky',
        desc: 'Husky是一个用于在Git提交或其他Git操作之前运行脚本的工具，它可以帮助开发人员实现代码质量控制、代码风格检查、单元测试等自动化流程。Husky能够在Git钩子（Git Hooks）上设置，例如pre-commit、pre-push等，当Git执行相关命令时会触发相应的脚本，从而实现自动化流程的集成和控制。Husky支持JavaScript和TypeScript，并且易于配置和使用。'
      },
      {
        name: 'postcss-pxtorem',
        desc: 'PostCSS-pxtorem是一个PostCSS插件，它可以将CSS中的像素值转换为rem单位，并可以自动计算根据基础字体大小（如16px）和目标浏览器的设备像素比例进行缩放。这个插件可以帮助开发人员更方便地实现响应式设计，同时提高可维护性和灵活性。'
      },
      {
        name: 'editorconfig',
        desc: 'EditorConfig是一种文件格式和相关的编辑器插件，用于协调不同编辑器和IDE之间的代码风格设置。通过为每个项目定义一组规则，可以确保在多人协作或跨多个编辑器或IDE的工作中保持一致的代码样式。 EditorConfig文件包括缩进、制表符宽度、换行符类型等设定。一些主流的代码编辑器和IDE，例如VS Code、Sublime Text、Emacs等，都支持EditorConfig。'
      },
      {
        name: 'lint-staged',
        desc: 'lint-staged是一个npm包，用于在Git提交代码之前运行linters和其他代码质量工具。它可以针对仅暂存（staged）的代码运行这些工具，以避免不必要的全局linting，从而提高效率。您可以使用它来确保您的代码符合团队的代码风格和标准，并防止低质量的代码进入代码库。'
      }
    ]
  })
}
