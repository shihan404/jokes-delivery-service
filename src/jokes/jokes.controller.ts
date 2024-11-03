import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { CreateJokeDto } from './dto/create-joke.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('jokes')
@Controller('api/jokes')
export class JokesController {
    constructor(private readonly jokesService: JokesService) { }

    @Get('random')
    @ApiOperation({ summary: 'Get a random joke' })
    @ApiResponse({ status: 200, description: 'Returns a random joke' })
    async getRandomJoke(@Query('type') type: string) {
        return this.jokesService.getRandomJoke(type);
    }

    @Get('types')
    @ApiOperation({ summary: 'Get all joke types' })
    @ApiResponse({ status: 200, description: 'Returns all joke types' })
    async getJokeTypes() {
        return this.jokesService.getJokeTypes();
    }

    @Post()
    @ApiOperation({ summary: 'Create a new joke' })
    @ApiResponse({ status: 201, description: 'Joke created successfully' })
    async createJoke(@Body() createJokeDto: CreateJokeDto) {
        return this.jokesService.createJoke(createJokeDto);
    }
}

