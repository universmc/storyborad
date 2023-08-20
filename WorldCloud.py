import matplotlib.pyplot as plt
from wordcloud import WordCloud

# Lire le fichier texte contenant les métadonnées
with open('metadata.txt', 'r') as file:
    metadata = file.read()

# Convertir les métadonnées en une seule chaîne de caractères
metadata_string = ' '.join(metadata.splitlines())

# Créer un objet WordCloud
wordcloud = WordCloud(width=800, height=400, background_color='white').generate(metadata_string)

# Afficher le nuage de mots
plt.figure(figsize=(10, 5))
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis('off')
plt.show()