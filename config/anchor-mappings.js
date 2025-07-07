/**
 * 中文文档锚点映射配置
 * 用于修正因翻译导致的内部锚点链接失效问题
 * 格式：英文锚点 -> 中文锚点
 */

const anchorMappings = {
  // Controllers (控制器)
  'route-parameters': '路由参数',
  'request-object': '请求对象',
  'request-payloads': '请求负载',
  'handling-errors': '错误处理',
  'full-resource-sample': '完整资源示例',
  'getting-up-and-running': '启动和运行',
  'library-specific-approach': '库特定方法',
  
  // Providers (提供者)
  'services': '服务',
  'dependency-injection': '依赖注入',
  'scopes': '作用域',
  'custom-providers': '自定义提供者',
  'optional-providers': '可选提供者',
  'property-based-injection': '基于属性的注入',
  'provider-registration': '提供者注册',
  
  // Modules (模块)
  'feature-modules': '功能模块',
  'shared-modules': '共享模块',
  'module-re-exporting': '模块重新导出',
  'global-modules': '全局模块',
  'dynamic-modules': '动态模块',
  
  // Guards (守卫)
  'authorization-guard': '授权守卫',
  'execution-context': '执行上下文',
  'role-based-authentication': '基于角色的认证',
  'binding-guards': '绑定守卫',
  'setting-roles-per-handler': '为每个处理程序设置角色',
  
  // Interceptors (拦截器)
  'basics': '基础',
  'call-handler': '调用处理程序',
  'aspect-interception': '切面拦截',
  'binding-interceptors': '绑定拦截器',
  'response-mapping': '响应映射',
  'exception-mapping': '异常映射',
  'stream-overriding': '流覆盖',
  'more-operators': '更多操作符',
  
  // Exception Filters (异常过滤器)
  'built-in-http-exceptions': '内置-http-异常',
  'custom-exceptions': '自定义异常',
  'exception-filters': '异常过滤器',
  'arguments-host': '参数主机',
  'binding-filters': '绑定过滤器',
  'catch-everything': '捕获所有异常',
  'inheritance': '继承',
  
  // Pipes (管道)
  'built-in-pipes': '内置管道',
  'binding-pipes': '绑定管道',
  'custom-pipes': '自定义管道',
  'schema-based-validation': '基于模式的验证',
  'object-schema-validation': '对象模式验证',
  'binding-validation-pipes': '绑定验证管道',
  'transformation-use-case': '转换用例',
  'providing-defaults': '提供默认值',
  'the-built-in-validationpipe': '内置的-validationpipe',
  'transform-payload-objects': '转换负载对象',
  'explicit-conversion': '显式转换',
  'global-scoped-pipes': '全局作用域管道',
  
  // Middlewares (中间件)
  'applying-middleware': '应用中间件',
  'route-wildcards': '路由通配符',
  'middleware-consumer': '中间件消费者',
  'excluding-routes': '排除路由',
  'functional-middleware': '函数式中间件',
  'multiple-middleware': '多个中间件',
  'global-middleware': '全局中间件',
  
  // Custom Decorators (自定义装饰器)
  'param-decorators': '参数装饰器',
  'passing-data': '传递数据',
  'working-with-pipes': '使用管道',
  'decorator-composition': '装饰器组合',
  
  // Provider Scopes (提供者作用域)
  'provider-scope': '提供者作用域',
  'usage': '用法',
  'controller-scope': '控制器作用域',
  'scope-hierarchy': '作用域层次结构',
  'request-provider': '请求提供者',
  'inquirer-provider': '查询者提供者',
  'performance': '性能',
  'durable-providers': '持久提供者',
  
  // Application Context (应用程序上下文)
  'getting-current-sub-tree': '获取当前子树',
  'standalone-applications': '独立应用程序',
  
  // Testing (测试)
  'unit-testing': '单元测试',
  'testing-utilities': '测试工具',
  'auto-mocking': '自动模拟',
  'end-to-end-testing': '端到端测试',
  'testing-request-scoped-instances': '测试请求作用域实例',
  'overriding-globally-registered-enhancers': '覆盖全局注册的增强器',
  
  // Task Scheduling (任务调度)
  'declarative-cron-jobs': '声明式-cron-任务',
  'declarative-timeouts': '声明式超时',
  'declarative-intervals': '声明式间隔任务',
  'dynamic-schedule-module-api': '动态调度模块-api',
  'dynamic-intervals': '动态间隔',
  'dynamic-timeouts': '动态超时',
  
  // Configuration (配置)
  'getting-started': '入门',
  'custom-configuration-files': '自定义配置文件',
  'configuration-namespaces': '配置命名空间',
  'partial-registration': '部分注册',
  'using-the-configservice': '使用-configservice',
  'configuration-schema-validation': '配置模式验证',
  'custom-validate-function': '自定义验证函数',
  'custom-getter-functions': '自定义获取器函数',
  'environment-variable-expansion': '环境变量扩展',
  'using-in-the-main.ts': '在-main.ts-中使用',
  
  // Caching (缓存)
  'installation': '安装',
  'in-memory-cache': '内存缓存',
  'interacting-with-the-cache-store': '与缓存存储交互',
  'auto-caching-responses': '自动缓存响应',
  'customize-caching': '自定义缓存',
  'different-stores': '使用其他缓存存储方案',
  'adjust-ttl': '调整-ttl',
  'disable-caching': '禁用缓存',
  'global-cache': '全局缓存',
  'websocket-and-microservices': 'websocket-和微服务',
  
  // Database (数据库)
  'typeorm-integration': 'typeorm-集成',
  'repository-pattern': '仓储模式',
  'multiple-databases': '多个数据库',
  'testing': '测试',
  'custom-repository': '自定义仓储',
  'async-configuration': '异步配置',
  'sequelize-integration': 'sequelize-集成',
  'model-injection': '模型注入',
  'relations': '关联关系',
  'auto-load-models': '自动加载模型',
  'transactions': '事务',
  'migrations': '迁移',
  
  // Validation (验证)
  'auto-validation': '自动验证',
  'disable-detailed-errors': '禁用详细错误',
  'stripping-properties': '剥离属性',
  'array-validation': '数组验证',
  'nested-object-validation': '嵌套对象验证',
  
  // Serialization (序列化)
  'exclude-properties': '排除属性',
  'expose-properties': '暴露属性',
  'transform': '转换',
  'pass-through': '直通',
  'websockets-and-microservices': 'websockets-和微服务',
  
  // Logger (日志)
  'basic-customization': '基础自定义',
  'advanced-configuration': '高级配置',
  'using-the-logger-for-application-logging': '将记录器用于应用程序日志记录',
  'extending-built-in-logger': '扩展内置记录器',
  
  // Cookies (Cookies)
  'use-with-express-default': '与-express-一起使用（默认）',
  'use-with-fastify': '与-fastify-一起使用',
  
  // HTTP Module (HTTP 模块)
  'configuration': '配置',
  'direct-axios-use': '直接使用-axios',
  'full-example': '完整示例',
  
  // Streaming Files (流式文件)
  'streamable-file-class': 'streamable-file-类',
  'cross-platform-support': '跨平台支持',
  'example': '示例',
  
  // File Upload (文件上传)
  'basic-example': '基本示例',
  'array-of-files': '文件数组',
  'multiple-files': '多个文件',
  'default-options': '默认选项',
  
  // Queues (队列)
  'named-queues': '命名队列',
  'queue-options': '队列选项',
  'producers': '生产者',
  'consumers': '消费者',
  'event-listeners': '事件监听器',
  'queue-management': '队列管理',
  'separate-processes': '独立进程',
  
  // Performance (性能)
  'fastify': 'fastify',
  'platform-specific-packages': '平台特定包',
  'redirect-response': '重定向响应',
  'template-engine': '模板引擎',
  'fastify-options': 'fastify-选项',
  'route-constraints': '路由约束',
  'middlewares': '中间件',
  
  // Events (事件)
  'dispatch-events': '派发事件',
  'listen-to-events': '监听事件',
  'async-event-listeners': '异步事件监听器',
  'handling-events-in-order': '按顺序处理事件',
  'scoped-events': '作用域事件',
  'namespaces': '命名空间',
  'wildcards': '通配符',
  
  // MVC (MVC)
  'template-rendering': '模板渲染',
  'dynamic-template-rendering': '动态模板渲染',
  'async-handlers': '异步处理程序',
  
  // Mongo (MongoDB)
  'connection': '连接',
  'hooks-middleware': '钩子（中间件）',
  'plugins': '插件',
  'discriminators': '判别器',
  
  // GraphQL 相关
  'overview': '概述',
  'graphql-playground': 'graphql-playground',
  'apollo-sandbox': 'apollo-sandbox',
  'multiple-endpoints': '多个端点',
  'code-first': '代码优先',
  'schema-first': '模式优先',
  'accessing-generated-schema': '访问生成的模式',
  'mercurius-integration': 'mercurius-集成',
  'object-types': '对象类型',
  'args-decorator': 'args-装饰器',
  'decorators': '装饰器',
  'typings': '类型定义',
  'generating-types': '生成类型',
  'mutations': '变更',
  'type-definitions': '类型定义',
  'subscriptions': '订阅',
  'pubsub': 'pubsub',
  'module-definition': '模块定义',
  'authentication-over-websockets': 'websockets-上的身份验证',
  'mercurius': 'mercurius',
  'date-scalar-example': '日期标量示例',
  'custom-directives': '自定义指令',
  'union-type': '联合类型',
  'enums': '枚举',
  'distributed-schema': '分布式模式',
  'tags': '标签',
  'federation-example': '联合示例',
  'sharing-context': '共享上下文',
  'field-middleware': '字段中间件',
  'using-custom-metadata': '使用自定义元数据',
  'partial': '部分',
  'pick': '选择',
  'omit': '省略',
  'intersection': '交集',
  'composition': '组合',
  'installing-plugin': '安装插件',
  'using-the-cli-plugin': '使用-cli-插件',
  'integration-with-ts-morph': '与-ts-morph-集成',
  'execute-enhancers-at-the-field-resolver-level': '在字段解析器级别执行增强器',
  
  // Microservices (微服务)
  'patterns': '模式',
  'client': '客户端',
  'async-microservices': '异步微服务',
  'options': '选项',
  'context': '上下文',
  'sample-grpc-service': 'grpc-服务示例',
  'streaming': '流',
  'grpc-streaming': 'grpc-流',
  'grpc-reflection': 'grpc-反射',
  'multiple-proto-files': '多个-proto-文件',
  'grpc-package-nest-implementation': 'grpc-包嵌套实现',
  'call-stream-handler': '调用流处理程序',
  'subject-strategy': '主题策略',
  'grpc-metadata': 'grpc-元数据',
  'message-pattern': '消息模式',
  'message-response-serialization': '消息响应序列化',
  'event-based-communication': '基于事件的通信',
  'naming-conventions': '命名约定',
  'retriable-exceptions': '可重试异常',
  'commit-offsets': '提交偏移量',
  'heartbeat-interval': '心跳间隔',
  'session-timeout': '会话超时',
  'retry-topic': '重试主题',
  'dead-letter-queue': '死信队列',
  'request-response': '请求-响应',
  'creating-a-custom-transporter': '创建自定义传输器',
  'custom-transporter-class': '自定义传输器类',
  'message-serialization': '消息序列化',
  'message-deserializer': '消息反序列化器',
  
  // WebSockets (WebSocket)
  'gateways': '网关',
  'message-binding': '消息绑定',
  'multiple-responses': '多个响应',
  'asynchronous-responses': '异步响应',
  'lifecycle-hooks': '生命周期钩子',
  'server-instance': '服务器实例',
  'filters': '过滤器',
  'extend-socket-io': '扩展-socket-io',
  'ws-library': 'ws-库',
  'advanced-redis-adapter': '高级-redis-适配器',
  'multiple-servers': '多个服务器',
  
  // Security (安全)
  'authentication': '认证',
  'implementing-passport-local': '实现-passport-local',
  'implementing-passport-jwt': '实现-passport-jwt',
  'enable-authentication-globally': '全局启用认证',
  'request-scoped-strategies': '请求作用域策略',
  'customize-passport': '自定义-passport',
  'graphql': 'graphql',
  'websockets': 'websockets',
  'basic-rbac-implementation': '基本-rbac-实现',
  'claims-based-authorization': '基于声明的授权',
  'integrating-casl': '集成-casl',
  'advanced-example': '高级示例',
  'basic-usage': '基本用法',
  'customization': '自定义',
  
  // Security - Authentication (认证)
  'creating-an-authentication-module': '创建认证模块',
  'jwt-token': 'jwt-令牌',
  'implementing-the-authentication-endpoint': '实现认证端点',
  'implementing-the-authentication-guard': '实现认证守卫',
  'enable-authentication-globally': '启用全局认证',
  'passport-integration': 'passport-集成',
  'example': '示例',
  
  // Security - Authorization (授权)
  'basic-rbac-implementation': '基本-rbac-实现',
  'claims-based-authorization': 'claims-based-authorization',
  'integrating-casl': '集成-casl',
  
  // Security - CORS (跨域)
  'getting-started': '入门',
  
  // Security - CSRF (跨站请求伪造)
  'use-with-express-default': '与-express-一起使用（默认）',
  'use-with-fastify': '与-fastify-一起使用',
  
  // Security - Encryption & Hashing (加密和哈希)
  'encryption': '加密',
  'hashing': '哈希',
  
  // Security - Helmet (头部安全)
  'use-with-express-default': '与-express-一起使用（默认）',
  'use-with-fastify': '与-fastify-一起使用',
  
  // Security - Rate Limiting (速率限制)
  'multiple-throttler-definitions': '多重限流器定义',
  'customization': '自定义配置',
  'proxies': '代理',
  'websockets': 'websockets',
  'graphql': 'graphql',
  'configuration': '配置',
  'async-configuration': '异步配置',
  'storages': '存储',
  'time-helpers': '时间助手',
  'migration-guide': '迁移指南',
  
  // CLI (命令行接口)
  'basic-workflow': '基本工作流程',
  'project-structure': '项目结构',
  'cli-command-syntax': 'cli-命令语法',
  'monorepo-mode': 'monorepo-模式',
  'workspace-projects': '工作空间项目',
  'global-and-workspace-commands': '全局和工作空间命令',
  'generating-libraries': '生成库',
  'using-libraries': '使用库',
  'nest-new': 'nest-new',
  'nest-build': 'nest-build',
  'nest-start': 'nest-start',
  'nest-generate': 'nest-generate',
  'nest-add': 'nest-add',
  'nest-update': 'nest-update',
  'nest-info': 'nest-info',
  'build-and-webpack': '构建和-webpack',
  'assets': '资源',
  
  // OpenAPI (OpenAPI)
  'bootstrap': '引导',
  'document-options': '文档选项',
  'setup-options': '设置选项',
  'types-and-parameters': '类型和参数',
  'arrays': '数组',
  'circular-dependencies': '循环依赖',
  'generics-and-polymorphism': '泛型和多态性',
  'additional-properties': '附加属性',
  'raw-definitions': '原始定义',
  'headers': '标头',
  'responses': '响应',
  'file-upload': '文件上传',
  'extensions': '扩展',
  'basic-authentication': '基本认证',
  'bearer-authentication': '承载认证',
  'oauth2-authentication': 'oauth2-认证',
  'cookie-authentication': 'cookie-认证',
  'api-property': 'api-property',
  'api-property-optional': 'api-property-optional',
  'api-response-property': 'api-response-property',
  'api-hide-property': 'api-hide-property',
  'extra-models': '额外模型',
  'oneOf-anyOf-allOf-not': 'oneOf-anyOf-allOf-not',
  
  // FAQ (常见问题)
  'common-errors': '常见错误',
  'circular-dependency-error': '循环依赖错误',
  'investigating-the-cannot-resolve-dependency-error': '调查无法解析依赖项错误',
  'request-lifecycle': '请求生命周期',
  'global-prefix': '全局前缀',
  'raw-body': '原始正文',
  'http-adapter': 'http-适配器',
  'keep-alive-connections': '保持活动连接',
  'hybrid-application': '混合应用程序',
  'sharing-configuration': '共享配置',
  
  // Recipes (食谱)
  'commands': '命令',
  'events': '事件',
  'queries': '查询',
  'sagas': 'sagas',
  'setup': '设置',
  'summary': '总结',
  'crud-generator': 'crud-生成器',
  'generating-a-new-resource': '生成新资源',
  'model-definition': '模型定义',
  'async-local-storage': '异步本地存储',
  'custom-implementation': '自定义实现',
  'nestjs-cls': 'nestjs-cls',
  'implementing-passport-strategies': '实现-passport-策略',
  'http-healthcheck': 'http-健康检查',
  'database-healthcheck': '数据库健康检查',
  'memory-heap-healthcheck': '内存堆健康检查',
  'disk-healthcheck': '磁盘健康检查',
  'custom-healthcheck': '自定义健康检查',
  'introduction': '介绍',
  'compodoc-integration': 'compodoc-集成',
  'hot-reload': '热重载',
  'using-webpack': '使用-webpack',
  'serve-static-files': '提供静态文件',
  'auto-load-entities': '自动加载实体',
  'load-entities-and-config-options': '加载实体和配置选项',
  'what-is-prisma': '什么是-prisma',
  'generate-nestjs-project': '生成-nestjs-项目',
  'set-up-prisma': '设置-prisma',
  'install-and-generate-prisma-client': '安装并生成-prisma-客户端',
  'create-prisma-service': '创建-prisma-服务',
  'use-prisma-service-to-read-and-write-data': '使用-prisma-服务读取和写入数据',
  'subscribers': '订阅者',
  'setting-up-a-healthcheck': '设置健康检查',
  'injecting-a-custom-logger': '注入自定义日志记录器',
  'use-external-logger': '使用外部记录器',
  'native-functions': '原生函数',
  'watch-mode': '监视模式',
  'in-the-cli': '在-cli-中',
  'in-jest-e2e': '在-jest-e2e-中',
  'common-pitfalls': '常见陷阱',
  'monorepo': 'monorepo',
  
  // 其他常见映射
  'routing': '路由',
  'versioning': '版本控制',
  'service': '服务',
  'module': '模块',
  'resolving-scoped-providers': '解析作用域提供者',
  'standard-providers': '标准提供者',
  'non-service-based-providers': '非基于服务的提供者',
  'non-class-based-provider-tokens': '非基于类的提供者令牌',
  'custom-method-key': '自定义方法键',
  'type-checking': '类型检查'
};

// 路径映射表
const pathMappings = {
  '/controllers': '/overview/controllers',
  '/guards': '/overview/guards',
  '/middleware': '/overview/middlewares',
  '/interceptors': '/overview/interceptors',
  '/exception-filters': '/overview/exception-filters',
  '/fundamentals/injection-scopes': '/fundamentals/provider-scopes',
  '/techniques/database': '/techniques/sql',
  
  // Security 路径映射
  '/security/authentication': '/security/authentication',
  '/security/authorization': '/security/authorization',
  '/security/cors': '/security/cors',
  '/security/csrf': '/security/csrf',
  '/security/encryption-hashing': '/security/encryption-hashing',
  '/security/helmet': '/security/helmet',
  '/security/rate-limiting': '/security/rate-limiting'
};

// 导出配置（CommonJS）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    anchorMappings,
    pathMappings
  };
}

// ES 模块导出支持
export { anchorMappings, pathMappings };
