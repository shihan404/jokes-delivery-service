import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJokeDto } from './dto/create-joke.dto';
import { Joke } from './jokes.entity';

@Injectable()
export class JokesService {
    constructor(
        @InjectRepository(Joke)
        private jokeRepository: Repository<Joke>,
    ) { }

    async createJoke(createJokeDto: CreateJokeDto): Promise<Joke> {
        const joke = this.jokeRepository.create(createJokeDto);
        return await this.jokeRepository.save(joke);
    }


    async getRandomJoke(type?: string): Promise<Joke> {
        const query = type ? { where: { type } } : {};
        const count = await this.jokeRepository.count(query);

        if (count === 0) {
            throw new NotFoundException(`No jokes found${type ? ` for type: ${type}` : ''}`);
        }

        // If only one joke is found, return it directly
        if (count === 1) {
            const [singleJoke] = await this.jokeRepository.find(query);
            return singleJoke;
        }

        // Select a random joke if more than one is available
        const randomIndex = Math.floor(Math.random() * count);
        const [joke] = await this.jokeRepository.find({
            ...query,
            skip: randomIndex,
            take: 1,
        });

        return joke;
    }

    async getJokeTypes(): Promise<string[]> {
        const types = await this.jokeRepository
            .createQueryBuilder('joke')
            .select('DISTINCT joke.type', 'type')
            .getRawMany();

        return types.map(t => t.type);
    }

}

