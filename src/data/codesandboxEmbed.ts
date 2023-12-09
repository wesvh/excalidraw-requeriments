export async function uploadHtmlToCodeSandbox(html: string) {
  // 샌드박스에 포함될 파일들을 준비합니다.
  const files = {
    "index.html": {
      content: html,
    },
  };

  // POST 요청으로 샌드박스 생성
  const response = await fetch(
    "https://codesandbox.io/api/v1/sandboxes/define?json=1",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ files }),
    },
  );
  console.log(response);
  const data = await response.json();

  // 샌드박스 ID를 사용하여 iframe URL을 생성
  const sandboxId = data.sandbox_id;
  return `https://codesandbox.io/embed/${sandboxId}`;
}

