import type { APIRoute } from 'astro';
import { site, companyInfo, features, newsList, solutionList } from '../data/siteConfig.js';

const getLlmsTxt = (): string => {
  const featureItems = features.map((item) => `- ${item.title}: ${item.description}`).join('\n');
  const solutionItems = solutionList.map((item) => `- ${item.title}: ${item.description}`).join('\n');
  const newsItems = newsList.map((item) => `- [${item.title}](${site.url}/article/${item.id}/): ${item.summary}`).join('\n');

  return `# ${site.name}

> ${site.description}

## 站点定位
${companyInfo.name}提供业务小程序与后台管理系统，面向中小企业、门店商家、本地生活服务商和创业团队，支持标准交付与二次开发。

## 主要页面
- [首页](${site.url}/): 产品能力、适用场景、交付流程和联系方式。
- [公司简介](${site.url}/about): 公司信息、系统交付能力、适用场景与企业资质。
- [预约演示](${site.url}/download): 系统演示咨询入口、演示前准备事项和联系方式。
- [新闻中心](${site.url}/news): 系统交付观点、公司动态与行业资讯。

## 产品能力
${featureItems}

## 适用场景
${solutionItems}

## 新闻与观点
${newsItems}

## 联系方式
- 电话: ${companyInfo.phone}
- 邮箱: ${companyInfo.email}
- 地址: ${companyInfo.address}
- ICP备案: ${companyInfo.icp}`.trim();
};

export const GET: APIRoute = () => new Response(getLlmsTxt(), {
  headers: { 'Content-Type': 'text/plain; charset=utf-8' },
});