import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';

@Injectable()
export class SongsService {
  private readonly songs: CreateSongDTO[] = [];

  create(createSongDTO: CreateSongDTO) {
    this.songs.push(createSongDTO);
    return this.songs;
  }

  findAll() {
    return this.songs;
  }
}
