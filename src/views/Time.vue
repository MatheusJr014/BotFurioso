<template>
    <div class="container py-4">
      <h1 class="text-white text-center mb-4">Nossas Equipes</h1>
      <p class="text-white text-center mb-5">Conheça os times da FURIA em diferentes modalidades de esports</p>
      
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col" v-for="(team, index) in teams" :key="index">
          <div class="card h-100 bg-dark text-white border border-light border-opacity-25">
            <div class="card-header bg-black d-flex align-items-center gap-2">
              <div class="logo-container-xs">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furia-esports-seeklogo-N9G0ru4OWcY5t3PEnx5SLABhM7oS01.png" alt="FURIA" width="20" height="20" class="logo-image" />
              </div>
              <span class="fw-bold">{{ team.name }}</span>
            </div>
            <img :src="team.image" class="card-img-top p-2 bg-dark" alt="Team image" style="height: 180px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">FURIA {{ team.name }}</h5>
              <p class="card-text">{{ team.description }}</p>
            </div>
            <div class="card-footer bg-black d-flex justify-content-between align-items-center">
              <small class="text-white text-opacity-75">{{ team.players }} Jogadores</small>
              <button class="btn btn-sm btn-outline-light">Ver Detalhes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TeamsPage',
    data() {
      return {
        teams: [
          {
            name: 'CS:GO',
            image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/csgo-team-JqZw8hLUG4rNs6mJGlbOdoHeFOXvpl.jpg',
            description: 'Nosso time principal de Counter-Strike: Global Offensive compete nos mais prestigiados torneios internacionais.',
            players: 5
          },
          {
            name: 'Valorant',
            image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/valorant-team-pjH3jnGWiuV1Q6Z6PCz4WDTHgXLHWY.jpg',
            description: 'A equipe de Valorant da FURIA compete na VCT Americas e nos principais torneios do cenário do FPS tático da Riot Games.',
            players: 5
          },
          {
            name: 'Rainbow Six',
            image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/r6-team-JgOVKtS5nKy0vETOE1qLyWl8OvuVRH.jpg',
            description: 'Nossa equipe de Rainbow Six: Siege é uma das mais tradicionais do Brasil, competindo na Brasileirão e em eventos internacionais.',
            players: 5
          },
          {
            name: 'League of Legends',
            image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lol-team-VEUi8sYwWxNHcgEEBUFZCCNGFQm1Ff.jpg',
            description: 'O time de LoL da FURIA compete no CBLOL, o Campeonato Brasileiro de League of Legends.',
            players: 5
          },
          {
            name: 'FURIA Female',
            image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/female-team-CpqM9lRvKCOgKXVaWEsY9lVSx6HrNF.jpg',
            description: 'Nossa equipe feminina compete em diversos títulos, representando a força das mulheres nos esports.',
            players: 5
          },
          {
            name: 'Free Fire',
            image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freefire-team-0aSWS3lQ68DjC4CiQ4vGgcA1wdMFbI.jpg',
            description: 'A equipe de Free Fire da FURIA compete na LBFF (Liga Brasileira de Free Fire) e outros torneios nacionais.',
            players: 6
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
  }
  
  .logo-container-xs {
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>