content = open('portfolio/index.html', encoding='utf-8').read()
# check what's linked in head
idx = content.find('<head>')
print(repr(content[idx:idx+500]))
# check if body has light class
print('body light class:', 'body class="light"' in content or "body class='light'" in content)
