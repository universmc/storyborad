   curl -s "https://api.groq.com/openai/v1/chat/completions" \
     -X POST \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer ${GROQ_API_KEY}" \
     -d '{
            "messages": [
                       {
                "role": "system",
                "content": "bonjour role:assistant"
              },
              {
                "role": "user",
                "content": "bonjour role:system"
              },
              {
                "role": "assistant",
                "content": "prompt response "
              }
            ],
            "model": "gemma2-9b-it",
            "temperature": 1,
            "max_completion_tokens": 1024,
            "top_p": 1,
            "stream": true,
            "stop": null
          }' | sed 's/data: //g' | jq -r '.choices[0].delta.content'